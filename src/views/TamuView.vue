<template>

 <div>

    <div class="container mt-4 mb-3 bf">
        <div class="row">
          <div class="col-1 mt-2"> <router-link to="/"> <b-icon icon="x-circle" scale="2" variant="black"></b-icon></router-link></div>
          <div class="col-7"><strong style="margin-left: 15%;" id="jam">{{ jam }} : {{ menit }} : {{ detik }}</strong></div>
          <div class="col-4"><strong style="margin-right: 3%;" id="p">{{ hari }}, {{ tanggal }} {{ bulan }} {{ tahun }}</strong></div>
        </div>
        <div class="row">
          <!-- pingger kiri -->
          <div class="col-2 mt-6"><img src="../assets/img/pinguin.jpg" style="width: 100%;" alt="" srcset=""></div>
       
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
            <a href="#" onclick="oke()" style="margin-left: 40%;"><img src="../assets/img/buku_tamu_confirm.png" width="6%" alt="" srcset=""></a>
          </div>
        </div>
    </div>
 </div>

</template>

<script>


    // $("#p").html(hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun)
    // var wak


    // wak  = setInterval(waktu,1000);

    // function waktu() {
    // var detik = new Date().getSeconds();
    // var menit = new Date().getMinutes();
    // var jam = new Date().getHours();
    // $("#jam").html(jam + ':' + menit + ':' + detik)
    // }

export default {
  name: "Buku_Tamue",
  data() {
    return {
     jam: null,
      menit: null,
     detik: null,
     hari: null,
     tanggal:null,
     bulan:null,
     tahun:null

    };
  },
  mounted() {
    var harii = ['minggu', 'senen', 'selasa', 'rabu', 'kamis', 'jum$#39;at', 'sabtu'];
    var bulann = ['january', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober',
      'november', 'desember'
    ];

    var tanggal = new Date().getDate();
    var _hari = new Date().getDay();
    var _bulan = new Date().getMonth();
    var _tahun = new Date().getYear();

    var hari = harii[_hari];
    var bulan = bulann[_bulan];
    var tahun = (_tahun < 1000) ? _tahun + 1900 : _tahun;

    this.hari = hari
    this.tanggal = tanggal
    this.bulan = bulan
    this.tahun = tahun
    setInterval(() => {
   this.detik = new Date().getSeconds();
   this.menit = new Date().getMinutes();
   this.jam = new Date().getHours();


    }, 1000);
  },
};
</script>