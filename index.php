<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>ITSolutions | Desarrollo Informático | S.S., ES.</title>
  <meta name="description" content="Análisis y Desarrollo de aplicaciones informáticas y soluciones de negocio con tecnología .NET y JAVA." />
  <meta name="keywords" content="XML, ASP, PHP, JSP, J2EE, .NET, SOFTWARE, FACTORY, web, página, alojamiento, Internet, soluciones, Tecnologia, movil, comercio, electrónico, e-commerce, e-business, B2B, B2C, gestión documental, gestión del conocimiento, bussines intelligent" />
  <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />

  <link rel="shortcut icon" href="/favicon_1.ico">
  <link rel="stylesheet" href="/theme/css/font-awesome.css">
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@itsolutions">
  <meta name="twitter:title" content="ITSolutions | Desarrollo Informático | S.S., ES.">
  <meta name="twitter:description" content="ITSolutions es una empresa de consultoría y desarrollo de software, dedicada a brindar soluciones informáticas y a ofrecer servicios especializados el desarrollo e implementación de sistemas.">
  <meta name="twitter:creator" content="@itsolutions">
  <meta name="twitter:domain" content="itsolutions.com">

  <!-- Facebook -->
  <meta property="og:url" content="/">
  <meta property="og:title" content="ITSolutions | Desarrollo Informático | S.S., ES.">
  <meta property="og:description" content="ITSolutions es una empresa de consultoría y desarrollo de software, dedicada a brindar soluciones informáticas y a ofrecer servicios especializados el desarrollo e implementación de sistemas.">

  <link rel="stylesheet" href="/theme/css/all.min.css">

  <!-- Google Fonts -->
  <link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700&amp;subset=latin,latin-ext' rel='stylesheet' type='text/css'>

  <!-- Jquery -->
  <script type="text/javascript" src="/theme/js/jquery-2.1.0.min.js"></script>

</head>
<body>
  <div id="loader">
    <div class="la-anim-1"></div>
  </div>
  <section class="section hello" id="hello">
    <div class="hello-header">
      <div class="container">
        <div class="col-md-8 col-xs-6">

        </div>
        <div class="col-md-4 col-xs-6 text-right">
        </div>
      </div>
    </div>
    <!-- SLIDER -->
    <div class="carousel">
      <?php include('sections/carousel.php') ?>
    </div> <!-- carousel -->
  </section> <!-- section hello -->
  <header class="header" id="header">
    <?php include('sections/header.php') ?>
  </header> <!-- header -->
  <!-- LA EMPRESA -->
  <section class="section about" id="empresa">
    <?php
    include('sections/empresa.php')
    ?>
  </section> <!-- section about -->

  <!-- SERVICIOS -->
  <section class="section services" id="servicios" style="background: url(/uploads/img/services-bg.jpg);" data-stellar-background-ratio="1.5">
    <?php
    include('sections/servicios.php')
    ?>
  </section> <!-- section services -->

  <!-- PORTAFOLIO -->
  <section class="section portfolio" id="portafolio">
    <?php include('sections/portafolio.php') ?>
  </section> <!-- section portfolio -->

  <!-- CLIENTES -->
  <section class="section team" id="clientes">
    <?php include('sections/clientes.php') ?>
  </section> <!-- section team -->

  <!-- TECNOLOGIAS -->
  <section class="section clients" id="tecnologias">
    <?php include('sections/tecnologias.php')?>
  </section> <!-- section clients -->

  <section class="section testimonial parallax" id="testimonial"  style="background: url(assets/images/services-bg.jpg);"  data-stellar-background-ratio="0.5">
    <?php include('sections/testimonial.php') ?>
  </section> <!-- section testimonial -->

  <section class="section contact" id="contacto">
    <?php include('sections/contacto.php') ?>
  </section> <!-- section contact -->

  <!-- FOOTER -->
  <footer class="footer" id="footer">
    <?php
    include('sections/footer.php')
    ?>
  </footer>

  <script src="/theme/front/js/validate.es_AR.js" type="text/javascript"></script>
  <script src="/theme/front/js/frontend.es_AR.js" type="text/javascript"></script>
  <script type="text/javascript" src="/theme/js/all.min.js"></script>
</body>
</html>
