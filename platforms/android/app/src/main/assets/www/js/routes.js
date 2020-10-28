angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('iNCIO', {
    url: '/page1',
    templateUrl: 'templates/iNCIO.html',
    controller: 'iNCIOCtrl'
  })

  .state('cursos', {
    url: '/page2',
    templateUrl: 'templates/cursos.html',
    controller: 'cursosCtrl'
  })

  .state('engenhariaDaComputaO', {
    url: '/page4',
    templateUrl: 'templates/engenhariaDaComputaO.html',
    controller: 'engenhariaDaComputaOCtrl'
  })

  .state('engenhariaElTrica', {
    url: '/page5',
    templateUrl: 'templates/engenhariaElTrica.html',
    controller: 'engenhariaElTricaCtrl'
  })

  .state('medicina', {
    url: '/page6',
    templateUrl: 'templates/medicina.html',
    controller: 'medicinaCtrl'
  })

  .state('economia', {
    url: '/page7',
    templateUrl: 'templates/economia.html',
    controller: 'economiaCtrl'
  })

  .state('finanAs', {
    url: '/page8',
    templateUrl: 'templates/finanAs.html',
    controller: 'finanAsCtrl'
  })

  .state('odontogia', {
    url: '/page9',
    templateUrl: 'templates/odontogia.html',
    controller: 'odontogiaCtrl'
  })

  .state('mSica', {
    url: '/page10',
    templateUrl: 'templates/mSica.html',
    controller: 'mSicaCtrl'
  })

  .state('auxiliosUniversitRios', {
    url: '/page12',
    templateUrl: 'templates/auxiliosUniversitRios.html',
    controller: 'auxiliosUniversitRiosCtrl'
  })

  .state('sobreAEquipe', {
    url: '/page13',
    templateUrl: 'templates/sobreAEquipe.html',
    controller: 'sobreAEquipeCtrl'
  })

  .state('bibliotecaUniversitRia', {
    url: '/page14',
    templateUrl: 'templates/bibliotecaUniversitRia.html',
    controller: 'bibliotecaUniversitRiaCtrl'
  })

  .state('psicologia', {
    url: '/page15',
    templateUrl: 'templates/psicologia.html',
    controller: 'psicologiaCtrl'
  })

  .state('restauranteUniversitRio', {
    url: '/page100',
    templateUrl: 'templates/restauranteUniversitRio.html',
    controller: 'restauranteUniversitRioCtrl'
  })

  .state('cartORU', {
    url: '/page20',
    templateUrl: 'templates/cartORU.html',
    controller: 'cartORUCtrl'
  })

  .state('normasDeUso', {
    url: '/page21',
    templateUrl: 'templates/normasDeUso.html',
    controller: 'normasDeUsoCtrl'
  })

  .state('intracampus', {
    url: '/I/page17INTRA',
    templateUrl: 'templates/intracampus.html',
    controller: 'intracampusCtrl'
  })

  .state('pAIP', {
    url: '/page16',
    templateUrl: 'templates/pAIP.html',
    controller: 'pAIPCtrl'
  })

  .state('pET', {
    url: '/page18',
    templateUrl: 'templates/pET.html',
    controller: 'pETCtrl'
  })

  .state('iniciaOAcadMica', {
    url: '/page22',
    templateUrl: 'templates/iniciaOAcadMica.html',
    controller: 'iniciaOAcadMicaCtrl'
  })

  .state('auxLioMoradia', {
    url: '/page23',
    templateUrl: 'templates/auxLioMoradia.html',
    controller: 'auxLioMoradiaCtrl'
  })

  .state('ajudaDeCusto', {
    url: '/page24',
    templateUrl: 'templates/ajudaDeCusto.html',
    controller: 'ajudaDeCustoCtrl'
  })

  .state('pACCE', {
    url: '/page25',
    templateUrl: 'templates/pACCE.html',
    controller: 'pACCECtrl'
  })

  .state('iniciaOCientFica', {
    url: '/page26',
    templateUrl: 'templates/iniciaOCientFica.html',
    controller: 'iniciaOCientFicaCtrl'
  })

  .state('fAMED', {
    url: '/page27',
    templateUrl: 'templates/fAMED.html',
    controller: 'fAMEDCtrl'
  })

  .state('graduaOEmOdontolgia', {
    url: '/page28',
    templateUrl: 'templates/graduaOEmOdontolgia.html',
    controller: 'graduaOEmOdontolgiaCtrl'
  })

  .state('projetoDeExtensO', {
    url: '/page29',
    templateUrl: 'templates/projetoDeExtensO.html',
    controller: 'projetoDeExtensOCtrl'
  })

  .state('estGioExtracurricular', {
    url: '/page30',
    templateUrl: 'templates/estGioExtracurricular.html',
    controller: 'estGioExtracurricularCtrl'
  })

  .state('pESQUISAMUS', {
    url: '/page32',
    templateUrl: 'templates/pESQUISAMUS.html',
    controller: 'pESQUISAMUSCtrl'
  })

  .state('eNCONTRAMUS', {
    url: '/page33',
    templateUrl: 'templates/eNCONTRAMUS.html',
    controller: 'eNCONTRAMUSCtrl'
  })

  .state('gruposDePesquisa', {
    url: '/page34',
    templateUrl: 'templates/gruposDePesquisa.html',
    controller: 'gruposDePesquisaCtrl'
  })

  .state('fORMAMUS', {
    url: '/page36',
    templateUrl: 'templates/fORMAMUS.html',
    controller: 'fORMAMUSCtrl'
  })

  .state('MSICANAESCOLA', {
    url: '/page37',
    templateUrl: 'templates/MSICANAESCOLA.html',
    controller: 'MSICANAESCOLACtrl'
  })

  .state('sPA', {
    url: '/page31',
    templateUrl: 'templates/sPA.html',
    controller: 'sPACtrl'
  })

  .state('programasDeExtensO', {
    url: '/page35',
    templateUrl: 'templates/programasDeExtensO.html',
    controller: 'programasDeExtensOCtrl'
  })

  .state('pETPSICOLOGIA', {
    url: '/page38',
    templateUrl: 'templates/pETPSICOLOGIA.html',
    controller: 'pETPSICOLOGIACtrl'
  })

  .state('uMESTRANHONONINHO', {
    url: '/page39',
    templateUrl: 'templates/uMESTRANHONONINHO.html',
    controller: 'uMESTRANHONONINHOCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});