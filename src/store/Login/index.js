import { ApiGetRequestMobile, ApiPostRequestMobile } from '@/utils/Api';
import { Message } from 'element-ui';

const state = {
  data: {
    nik: '',
    pwd: '',
  },
};

const mutations = {
  changeLogin(state, objUpdate) {
    state.data = Object.assign({}, state.data, objUpdate);
  },
};

const actions = {
  async searchSchool({ commit }, payload) {
    const result = await ApiGetRequestMobile(`school?q=${escape(payload)}`);
    if (result.error) {
      Message({
        type: 'error',
        message: result.error,
      });
    } else {
      const dataObj = result.data.data.map((item) => {
        item['value'] = item.name;
        return item;
      });

      commit('changeLogin', {
        school: dataObj || [],
      });
    }
  },
  async submitLogin({ commit, state }) {
    const { data } = state;

    const result = await ApiPostRequestMobile(`school/check`, {
      school_id: data.selectSchool.id,
      nis_nik: data.nik,
    });

    if (result.error) {
      Message({
        type: 'error',
        message: 'Data anda tidak ditemukan',
      });
    } else {
      const dataResult = result.data.data;
      const loginResult = await ApiPostRequestMobile(`school/login`, {
        uuid: dataResult.id,
        password: data.pwd,
      });

      if (loginResult.error) {
        Message({
          type: 'error',
          message: 'Periksa kembali nik dan password anda',
        });
      } else {
        await commit('changeLogin', {
          userlogin: loginResult,
        });

        return loginResult;
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
