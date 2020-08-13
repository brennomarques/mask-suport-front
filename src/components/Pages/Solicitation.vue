<template>
  <section class="container-fluid fundo">
    <div class="conteiner-sup">

      <div class="form-group pt-5 ml-3">
        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="">
              <h1 class="font2"><strong>Informe a Solicitação:</strong></h1>
              <p class="font1 mt-5 mb-1">A solicitação e encontrada no documento resevado e/ou na chave publica do certificado A1, A3.</p>
              <form class="mt-4 mb-4">
                <div class="input-group input-group-lg">
                  <input type="text" v-model="solicitation" placeholder="Solicitação" class="form-control">
                  <div class="input-group-append">
                    <button @click="eSolicitation()" type="button" class="btn btn-button-menu">Gerar</button>
                  </div>
                </div>
              </form> 
            </div>

          </div>

          <div class="col-md-6 cust-img">
            <img src="@/img/page/suporte1.png" class="img-fluid float-right" width="700">
          </div>

        </div>
        
      </div>

      <div v-if="sho == true && inf==2" v-on="eFecharAlert()">
        <eAlertDanger>{{ frase }}</eAlertDanger>
      </div>

    </div>
  </section>
</template>

<script>
import eAlertDanger from '@/components/Alerts/AlertDanger';
export default {
  components: {eAlertDanger},

  data() {
    return {
      inf: 0,
      frase: '',
      sho: '',
      solicitation: ''
    }
  },  
  methods: {
    eFecharAlert(){  //fecha o alert com 3000
        setTimeout(() => {
            this.sho=false; 
        }, 3000);  
    },
    eAlert(x){ 
        this.inf = x;
    },    
    irTypeService() {
      this.$router.push('/typeservice')
    },
    eSolicitation(){
      try{
        if(this.solicitation == '1001'){
          this.$store.state.solicitation = this.solicitation//Guarda a solicitação. 
          this.irTypeService();
        }else if(this.solicitation.length === 16){
          this.$store.state.solicitation = this.solicitation//Guarda a solicitação.
          this.irTypeService();
        }else{
          this.inf = 2;
          this.sho = true;
          this. frase = 'Solicitação deve conter 16 caracteres!';
        }
      }catch (error){
        this.inf = 2;
        this.sho = true;
        this. frase = 'Error: generic error !';

      }
    }
  }

}
</script>

<style scoped>
.fundo{
  background: #4FB166;
  color: white;
  position: absolute;
  height: 100%;
}
.btn-button-menu{
  color: #FFFFFF;
  background-color: #145650;
  border-color: #145650;
  border-radius: 15px;
  font-size: 20px;
}
.btn-button-menu:hover{
  color: #FFFFFF;
  background-color: #0F7366;
  border-color: #0F7366;
}
.conteiner-sup{
    margin-right: 50px;
    margin-left: 50px;
}
.font1{
  font-size: 18px;
}
.font2{
  font-size: 40px;
}
.cust-img{
  margin-top: 150px;
}
.bb{
  border: 1px solid red;
}


</style>