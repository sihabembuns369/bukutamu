<template>

    <body>
        <div>
            <div class="blob-btn__blob" style="top: 50%;position: absolute;width: 100%; text-align: center;">
                
                <b-button id="show-btn" size="lg" @click="$bvModal.show('bv-modal-example')" variant="primary">Buku Tamu Dengan Modal</b-button>
            </div>
            <div class="" size="lg" style="top:60%;position: absolute;width: 100%; text-align: center;">
                <router-link to="/tamune" class="btn btn-primary">Buku Tamu Dengan Router Link</router-link>
            </div>
            <b-modal id="bv-modal-example" class="bf" size="xl" hide-footer hide-header hide-backdrop>
                <div class="d-block text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-1">
          <!-- <div class="col-1 mt-2"> <router-link to="/"> <b-icon icon="x-circle" scale="2" variant="black"></b-icon></router-link></div> -->

                                <div class="fa-solid fa-xmark" data-dismiss="modal"
                                    style="font-size: 30px; padding: 0;"></div>
                            </div>
                            <div class="col-7"><strong style="margin-left: 15%;" id="jam"></strong></div>
                            <div class="col-4"><strong style="margin-right: 3%;" id="p"></strong></div>
                        </div>
                        <div class="row">
                            <!-- pingger kiri -->
                            <div class="col-2 mt-6"><img src="../assets/img/pinguin.jpg" style="width: 100%;" alt=""
                                    srcset="" /></div>

                            <div class="col-6 ">
                                <div class="form-group">
                                    <label for="status">input satu</label>
                                    <input type="text" class="form-control">
                                    <label for="status">input satu</label>
                                    <input type="text" class="form-control">
                                    <label for="status">input satu</label>
                                    <input type="text" class="form-control">
                                    <label for="status">input satu</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <!-- pingger kanan -->
                            <div class="col-4">
                                <!-- <strong id="p">tampilan kalender</strong> -->
                                <div class="form-group">
                                    <label for="status">input dua</label>
                                    <input type="text" class="form-control">
                                    <label for="status">input satu</label>
                                    <input type="text" class="form-control">
                                    <label for="status">input satu</label>
                                    <input type="text" class="form-control">
                                </div>
                                <a href="#" onclick="oke()" style="margin-left: 40%;"><img
                                        src="../assets/img/buku_tamu_confirm.png" width="6%" alt="" srcset=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </b-modal>




        </div>
    </body>
</template>

<script>
export default {
    name: 'BukuTamu'
}
</script>