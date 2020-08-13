<template>
 <header><!-- inicio Cabecalho -->
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid conteiner-sup">
        
        <router-link to="/solicitarion">
          <a href="#" class="navbar-brand">
            <img src="../../img/logo_XG.png" width="156">
          </a>
        </router-link>       
                  
        <button class="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="nav-principal">
          <ul class="navbar-nav ml-auto">

            <li class="nav-item" id="s1">
              <router-link class="nav-link ml-3" to="/solicitarion">Início</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link ml-3" to="/certificadoa1"><span v-on:click="irQualMidia('Certificado A1')">Certificado A1</span></router-link>
            </li>
              
            <li class="nav-item">
              <router-link class="nav-link ml-3" to="/certificadoa3"><span v-on:click="irQualMidia('Certificado A3')">Certificado A3</span></router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link ml-3" to="/certificadobirdid"><span v-on:click="irQualMidia('Certificado BirdId')">BirdID</span></router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link ml-3" to="/help"><span v-on:click="irQualMidia('Help')">Ajuda</span></router-link>
            </li>

            <!-- <li class="nav-item">
              <router-link class="nav-link ml-3" to="/">Sair</router-link>
            </li> -->

          </ul> 

        </div>

      </div>
    </nav>
      <hr class="linha mt-0"/>  
    </header><!--/fim Cabecalho -->
</template>

<script>
export default {
  
  methods: {
    irQualMidia(tipomidia){
      this.$store.state.service = tipomidia//manda o nome do drive.
      switch(tipomidia) {
          case "Certificado A1":
              this.$store.state.solicitation = ''
              this.$router.push('/certificadoa1')
              break;
          case "Certificado A3":
              this.$store.state.solicitation = ''
              this.$router.push('/certificadoa3')
              break;
          case "Certificado BirdId":
              this.$store.state.solicitation = ''
              this.$router.push('/certificadobirdid')
              break;
          case "Help":
              this.$store.state.solicitation = ''
              this.$router.push('/help')
              break;    
      }
    }  
  }

}
</script>

<style scoped>

.conteiner-sup{
  margin-right: 50px;
  margin-left: 50px;
}
.linha{
	color: #808493;
    margin-right: 65px;
    margin-left: 64px;
}

  

</style>