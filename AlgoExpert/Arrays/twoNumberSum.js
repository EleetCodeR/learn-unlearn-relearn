<!DOCTYPE html>
<!-- saved from url=(0054)https://www.algoexpert.io/questions/Two%20Number%20Sum -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>AlgoExpert | Ace the Coding Interviews</title>
    <meta name="description" content="AlgoExpert is the leading platform to prepare for coding interviews. Master essential algorithms and data structures, and land your dream job with AlgoExpert.">
    <link rel="canonical" href="https://www.algoexpert.io/questions/Two%20Number%20Sum">
    <link rel="shortcut icon" type="image/png" href="https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/favicon.png">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="AlgoExpert | Ace the Coding Interviews">
    <meta property="og:description" content="The leading platform to prepare for coding interviews. Master essential algorithms and data structures, and land your dream job with AlgoExpert.">
    <meta property="og:image" content="https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/social-logo.png">
    <meta property="og:url" content="https://www.algoexpert.io">

    <meta name="twitter:title" content="AlgoExpert | Ace the Coding Interviews">
    <meta name="twitter:description" content="The leading platform to prepare for coding interviews. Master essential algorithms and data structures, and land your dream job with AlgoExpert.">
    <meta name="twitter:image" content="https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/social-logo-twitter.png">
    <meta name="twitter:card" content="summary">

    <meta name="AE_DEFAULT_TOKEN" content="eyJhbGciOiJIUzI1NiIsImtpZCI6IjdjYmM2ZWRhNzk1ZGM1YzMxZjJmOTk2Yzg0ODRkZTRiMGIxOTgwMmVmOTYwOWE3YzJmNDFmM2E0OTVhYjZmN2MiLCJ0eXAiOiJKV1QifQ.eyJTZXNzaW9uSUQiOiJjNGMyZmViZi03NGYwLTQyMjktODI3My03OWFhOWJkMGI1OWYiLCJNZXRhZGF0YSI6eyJhdmF0YXJfdXJsIjoiIiwiZW1haWwiOiIiLCJuYW1lIjoiIiwib2F1dGhfcHJvdmlkZXIiOiJkZWZhdWx0Iiwib2F1dGhfdXNlcl9pZCI6IjkwMDM3YmUyLTk1MWMtNGYxMS04OGEzLTRlZTU2OGZkMDczYSIsInJlZ2lvbiI6IklOIiwicm9sZXMiOiJ1c2VyIn0sIkdlbmVyaWNNZXRhIjp7fSwiZXhwIjo0NzY0NTc5MjEyLCJqdGkiOiI1ODg5MjUwNS1hNTFjLTRiNjYtYjc3OC0yMzZhYTJjOGQyZTIiLCJpYXQiOjE2MTA5NzkyMTIsImlzcyI6ImFsZ29leHBlcnQiLCJzdWIiOiJkZWZhdWx0fDkwMDM3YmUyLTk1MWMtNGYxMS04OGEzLTRlZTU2OGZkMDczYSJ9.LILIfLKw-D3aUOIphCfz3TNFmusgfoHt8TujDFA8EuQ">

    <link rel="preconnect" href="https://player.vimeo.com/">
    <link rel="preconnect" href="https://vimeo.com/">
    <link rel="preconnect" href="https://i.vimeocdn.com/">
    <link rel="preconnect" href="https://fresnel.vimeocdn.com/">
    <link rel="preconnect" href="https://assets.algoexpert.io/">

    <link rel="stylesheet" crossorigin="anonymous" href="./twoNumberSum_files/main(1).css"><style>
/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Open Sans Regular'), local('OpenSans-Regular'),
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/open-sans-v17-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/open-sans-v17-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-700 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Open Sans Bold'), local('OpenSans-Bold'),
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/open-sans-v17-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/open-sans-v17-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* lato-regular - latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Lato Regular'), local('Lato-Regular'),
       url('/fonts/lato-v16-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/lato-v16-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* lato-700 - latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Lato Bold'), local('Lato-Bold'),
       url('/fonts/lato-v16-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/lato-v16-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* source-code-pro-regular - latin */
@font-face {
  font-family: 'Source Code Pro';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Source Code Pro Regular'), local('SourceCodePro-Regular'),
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/source-code-pro-v11-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/source-code-pro-v11-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-code-pro-700 - latin */
@font-face {
  font-family: 'Source Code Pro';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Source Code Pro Bold'), local('SourceCodePro-Bold'),
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/source-code-pro-v11-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/source-code-pro-v11-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* ubuntu-regular - latin */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/ubuntu-v14-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/ubuntu-v14-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* ubuntu-700 - latin */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/ubuntu-v14-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/ubuntu-v14-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* jura-regular - latin */
@font-face {
  font-family: 'Jura';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/jura-v13-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/jura-v13-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* jura-700 - latin */
@font-face {
  font-family: 'Jura';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/jura-v13-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('https://assets.algoexpert.io/gc14f7bc2b3-prod/dist/fonts/jura-v13-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
</style>
    <!-- Google Tag Manager -->

  <script async="" src="./twoNumberSum_files/gtm.js.download"></script><script>
      // See documentation 1) for details.
      if (!window.location.href.includes('auth-complete')) {
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=pGrmsLKCCIHvNpHum0P92w&gtm_preview=env-2&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
        })(window,document,'script','aeDataLayer','GTM-PZK5NHK');
      }
  </script>

<!-- End Google Tag Manager -->

    <script type="text/javascript">
    window.onerror = function(message, source, lineno, colno, error) {
      document.getElementById("unsupported-fallback").style.display = "block";
    };
    </script>

  <link href="./twoNumberSum_files/main.bundle.css" rel="stylesheet"><link rel="stylesheet" type="text/css" href="./twoNumberSum_files/codemirror.bundle.css"><script charset="utf-8" src="./twoNumberSum_files/codemirror.bundle.js.download"></script><script charset="utf-8" src="./twoNumberSum_files/vendors_account-page_affiliate-dashboard_assessments-page_code-editor_design-fundamentals_interview-_07598feb.bundle.js.download"></script><script charset="utf-8" src="./twoNumberSum_files/vendors_behavioral-page_code-editor_data-structures_design-fundamentals_hp-banner3_machine-home-page_9336c531.bundle.js.download"></script><script charset="utf-8" src="./twoNumberSum_files/vendors_code-editor_design-fundamentals_questions.bundle.js.download"></script><link rel="stylesheet" type="text/css" href="./twoNumberSum_files/code-editor.bundle.css"><script charset="utf-8" src="./twoNumberSum_files/code-editor.bundle.js.download"></script><style type="text/css">.__react_component_tooltip {
  border-radius: 3px;
  display: inline-block;
  font-size: 13px;
  left: -999em;
  opacity: 0;
  padding: 8px 21px;
  position: fixed;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
  top: -999em;
  visibility: hidden;
  z-index: 999;
}
.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {
  pointer-events: auto;
}
.__react_component_tooltip::before, .__react_component_tooltip::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
}
.__react_component_tooltip.show {
  opacity: 0.9;
  margin-top: 0;
  margin-left: 0;
  visibility: visible;
}
.__react_component_tooltip.place-top::before {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  bottom: -8px;
  left: 50%;
  margin-left: -10px;
}
.__react_component_tooltip.place-bottom::before {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  top: -8px;
  left: 50%;
  margin-left: -10px;
}
.__react_component_tooltip.place-left::before {
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  right: -8px;
  top: 50%;
  margin-top: -5px;
}
.__react_component_tooltip.place-right::before {
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  left: -8px;
  top: 50%;
  margin-top: -5px;
}
.__react_component_tooltip .multi-line {
  display: block;
  padding: 2px 0;
  text-align: center;
}</style><style type="text/css" data-jss="" data-meta="aphrodite-jss">

</style><script charset="utf-8" src="./twoNumberSum_files/d3.bundle.js.download"></script><link id="prism-stylesheet" href="./twoNumberSum_files/workspace.css" rel="stylesheet"><link id="prism-line-numbers-stylesheet" href="./twoNumberSum_files/workspace-line-numbers.css" rel="stylesheet"></head>
  <body data-new-gr-c-s-check-loaded="14.991.0" data-gr-ext-installed="" class="" data-new-gr-c-s-loaded="14.991.0">
    <!-- Google Tag Manager (noscript) -->
    
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZK5NHK&gtm_auth=pGrmsLKCCIHvNpHum0P92w&gtm_preview=env-2&gtm_cookies_win=x"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    
    <!--End Google Tag Manager (noscript) -->
    <div id="unsupported-fallback" style="
        background-color: #02203c;
        color: white;
        font-size: 30px;
        padding: 0 20px;
        height: 100vh;
        line-height: 100vh;
        text-align: center;
        display: none;
      " wfd-id="203">
      Unsupported browser. Please try updating your browser.
    </div>
    <div id="root" wfd-id="0"><div class="PageWrapper" wfd-id="1"><div class="alaSy8Hjm_yjkpAXWU9io  " wfd-id="202"><div class="_1U2gNwADtauoG_LEaWjaSV"><div class="w8rAo2C_UqSTz_HvU7cmp"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="_3S0bWGToc3OoNo6WWyZ9AQ ULrPIaLL7NzOIZ5it5YD9"><path d="M496.82 301.923c-116.133-54.825-201.845-94.297-201.845-94.297L15.18 210.071s76.649 50.286 180.847 94.405z" fill="#b2527e"></path><path d="M503.86 308.124a7.512 7.512 0 00-7.04-6.201c-2.29-.1-217.1-9.861-443.01-1.9l22.81 104.423-22.81 104.433C119.17 511.18 183.6 512 242.23 512c143.98 0 252.96-4.961 254.59-5.031a7.5 7.5 0 007.04-6.201c.33-1.89 8.14-46.946 8.14-96.323s-7.81-94.431-8.14-96.321zM15.18 5.025a7.5 7.5 0 00-7.04 6.201C7.81 13.116 0 58.172 0 107.548s7.81 94.432 8.14 96.322a7.512 7.512 0 007.04 6.201c1.63.07 110.59 5.021 254.59 5.021 58.37 0 122.5-.81 187.57-3.08l-21.96-104.463L457.34 3.095C231.75-4.816 17.47 4.925 15.18 5.025z" fill="#ff5f85"></path><path d="M511.29 199.38a7.515 7.515 0 01-.37 7.071 7.512 7.512 0 01-6.07 3.62c-7.24.34-14.49.66-21.73.95-8.61.36-17.2.69-25.78.99-3.96-7.491-29.02-53.897-64.06-99.403a8.314 8.314 0 010-10.121c35.02-45.486 60.07-91.862 64.06-99.393 9.04.31 18.11.66 27.18 1.03 6.77.29 13.55.58 20.33.9 2.5.12 4.78 1.48 6.07 3.62a7.515 7.515 0 01.37 7.071c-.97 2.04-23.21 49.026-55.91 91.832 32.7 42.807 54.94 89.793 55.91 91.833z" fill="#77e0ab"></path><path d="M117.97 409.337c-35.15 45.626-60.28 92.202-64.16 99.543-8.3-.29-16.61-.61-24.93-.96-7.24-.29-14.49-.61-21.73-.95a7.512 7.512 0 01-6.07-3.62 7.515 7.515 0 01-.37-7.071c.97-2.04 23.21-49.026 55.91-91.832-32.7-42.805-54.94-89.791-55.91-91.832a7.515 7.515 0 01.37-7.071 7.512 7.512 0 016.07-3.62c6.78-.31 13.56-.61 20.34-.88 8.78-.37 17.56-.71 26.32-1.02 3.89 7.341 29.01 53.907 64.16 99.533a8.013 8.013 0 010 9.78z" fill="#ffe878"></path><g fill="#dcefff"><path d="M75.412 59.56a7.5 7.5 0 00-13.926 3.156c-.151 1.711-3.67 42.457-.006 88.976.325 4.13 3.935 7.204 8.065 6.889a7.501 7.501 0 006.888-8.067c-1.812-23.01-1.79-44.891-1.327-60.886 8.928 16.407 21.194 39.997 32.034 64.51a7.502 7.502 0 008.696 4.237 7.5 7.5 0 005.64-7.861c-3.56-45.215-.042-86.07-.006-86.477a7.501 7.501 0 00-6.811-8.132c-4.115-.356-7.766 2.684-8.131 6.811-.108 1.227-1.945 22.496-1.63 51.57-15.41-30.84-29.3-54.412-29.486-54.726zM195.985 70.867c4.094.238 7.667-2.955 7.887-7.093a7.5 7.5 0 00-7.092-7.888c-24.674-1.313-47.228-.053-48.175.002a7.5 7.5 0 00-7.043 6.827c-.151 1.711-3.67 42.457-.006 88.976a7.499 7.499 0 007.049 6.899c.625.036 10.66.597 24.508.597 7.133 0 15.278-.149 23.667-.595a7.5 7.5 0 007.092-7.888c-.219-4.137-3.801-7.313-7.887-7.093-16.063.853-31.518.563-39.95.278-.665-10.278-.982-20.232-1.082-29.423 4.53.142 10.699.277 17.736.277 7.373 0 15.701-.149 24.091-.595a7.5 7.5 0 007.092-7.888c-.219-4.137-3.801-7.324-7.887-7.093-15.972.848-32.06.566-41.011.283.168-12.546.677-22.697 1.063-28.864 8.43-.281 23.886-.572 39.948.281zM245.511 159.183a7.502 7.502 0 007.222-5.476c5.055-18.04 9.15-35.508 12.27-50.129 3.119 14.621 7.216 32.089 12.271 50.129a7.5 7.5 0 0014.444 0c12.966-46.268 19.616-88.757 19.682-89.181a7.5 7.5 0 10-14.823-2.298c-.051.328-4.122 26.317-12.081 59.548-7.958-33.231-12.03-59.22-12.081-59.548a7.5 7.5 0 00-14.822 0c-.051.328-4.122 26.317-12.08 59.548-7.959-33.231-12.03-59.22-12.081-59.548a7.501 7.501 0 00-14.823 2.298c.065.424 6.716 42.913 19.682 89.181a7.498 7.498 0 007.22 5.476zM211.631 456.228a7.5 7.5 0 007.5-7.501V425.63c12.721-23.598 21.703-61.853 22.088-63.509a7.501 7.501 0 00-5.604-9.005 7.501 7.501 0 00-9.005 5.605c-.075.321-6.18 26.309-14.979 47.592-8.798-21.282-14.902-47.27-14.978-47.592-.939-4.035-4.973-6.54-9.005-5.605a7.5 7.5 0 00-5.604 9.005c.385 1.657 9.367 39.911 22.087 63.509v23.097a7.5 7.5 0 007.5 7.501zM304.512 368.491a7.5 7.5 0 007.886-7.093 7.5 7.5 0 00-7.092-7.888c-24.732-1.317-42.545-.045-43.29.01a7.5 7.5 0 00-6.923 6.819c-.151 1.711-3.669 42.457-.006 88.976a7.5 7.5 0 006.929 6.892c.493.036 8.449.604 20.936.604 6.395 0 13.978-.148 22.354-.594a7.5 7.5 0 007.092-7.888c-.22-4.138-3.788-7.315-7.887-7.093-15.149.804-27.758.592-34.941.327-.666-10.277-.984-20.231-1.085-29.423 3.674.122 8.456.228 14.04.228 6.633 0 14.4-.148 22.781-.594 4.137-.22 7.312-3.751 7.092-7.888s-3.788-7.328-7.887-7.093c-15.099.801-28.322.592-36.006.329.168-12.6.68-22.789 1.066-28.959 7.186-.264 19.796-.475 34.941.328zM330.899 456.228a7.504 7.504 0 007.344-6.017c.048-.236 2.105-10.337 5.6-24.217 6.134-.254 16.77-.523 28.055-.029 3.499 13.896 5.559 24.01 5.607 24.247a7.498 7.498 0 008.836 5.868 7.5 7.5 0 005.867-8.836c-.474-2.35-11.791-57.907-27.602-90.126a7.5 7.5 0 00-13.465.001c-15.809 32.217-27.127 87.775-27.601 90.125a7.502 7.502 0 007.359 8.984zm26.975-76.639c3.754 10.017 7.142 20.98 10.004 31.217a355.487 355.487 0 00-20.016.028c2.864-10.245 6.254-21.219 10.012-31.245zM463.352 382.588c0-13.419-5.883-20.705-10.818-24.455-14.778-11.229-38.393-5.094-41.038-4.359a7.501 7.501 0 00-5.459 6.565c-.151 1.711-3.67 42.457-.006 88.975a7.5 7.5 0 008.066 6.889 7.5 7.5 0 006.888-8.066c-.969-12.303-1.413-24.28-1.547-35.209 4.353.367 9.784.478 15.343-.289 3.258 8.017 9.287 23.393 13.908 38.308a7.503 7.503 0 007.162 5.283 7.501 7.501 0 007.166-9.723c-4.613-14.891-10.435-29.88-13.872-38.377a29.243 29.243 0 004.144-2.778c4.591-3.698 10.063-10.649 10.063-22.764zm-19.456 11.066c-5.946 4.806-16.932 4.944-24.457 4.193.166-13.637.739-24.525 1.138-30.67 6.841-1.079 17.123-1.491 22.903 2.917 3.278 2.501 4.872 6.588 4.872 12.494 0 6.691-2.543 9.52-4.456 11.066z"></path></g><circle cx="345.68" cy="106.954" fill="#ffa1a8" r="7.5"></circle><circle cx="345.68" cy="63.959" fill="#ffa1a8" r="7.5"></circle><circle cx="345.68" cy="149.94" fill="#ffa1a8" r="7.5"></circle><circle cx="154.581" cy="404.356" fill="#ffa1a8" r="7.5"></circle><circle cx="154.581" cy="361.36" fill="#ffa1a8" r="7.5"></circle><circle cx="154.581" cy="447.342" fill="#ffa1a8" r="7.5"></circle><path d="M511.29 199.38a7.515 7.515 0 01-.37 7.071 7.512 7.512 0 01-6.07 3.62c-7.24.34-14.49.66-21.73.95-30.26-61.298-60.29-104.063-60.29-104.063 26.46-37.245 51.99-84.381 61.69-102.833 6.77.29 13.55.58 20.33.9 2.5.12 4.78 1.48 6.07 3.62a7.515 7.515 0 01.37 7.071c-.97 2.04-23.21 49.026-55.91 91.832 32.7 42.806 54.94 89.792 55.91 91.832z" fill="#65c1b0"></path><path d="M89.17 403.856s-30.03 42.765-60.29 104.063c-7.24-.29-14.49-.61-21.73-.95a7.512 7.512 0 01-6.07-3.62 7.515 7.515 0 01-.37-7.071c.97-2.04 23.21-49.026 55.91-91.832-32.7-42.805-54.94-89.791-55.91-91.832a7.515 7.515 0 01.37-7.071 7.512 7.512 0 016.07-3.62c6.78-.31 13.56-.61 20.34-.88 9.71 18.462 35.23 65.578 61.68 102.813z" fill="#ffd37b"></path></svg><h3 class="_32KLMTLm3hrCpNnHr8QAEi">New Year's Deal!</h3><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="_3S0bWGToc3OoNo6WWyZ9AQ sQc8O-dt6TIN7IHyqIXLV"><path d="M496.82 301.923c-116.133-54.825-201.845-94.297-201.845-94.297L15.18 210.071s76.649 50.286 180.847 94.405z" fill="#b2527e"></path><path d="M503.86 308.124a7.512 7.512 0 00-7.04-6.201c-2.29-.1-217.1-9.861-443.01-1.9l22.81 104.423-22.81 104.433C119.17 511.18 183.6 512 242.23 512c143.98 0 252.96-4.961 254.59-5.031a7.5 7.5 0 007.04-6.201c.33-1.89 8.14-46.946 8.14-96.323s-7.81-94.431-8.14-96.321zM15.18 5.025a7.5 7.5 0 00-7.04 6.201C7.81 13.116 0 58.172 0 107.548s7.81 94.432 8.14 96.322a7.512 7.512 0 007.04 6.201c1.63.07 110.59 5.021 254.59 5.021 58.37 0 122.5-.81 187.57-3.08l-21.96-104.463L457.34 3.095C231.75-4.816 17.47 4.925 15.18 5.025z" fill="#ff5f85"></path><path d="M511.29 199.38a7.515 7.515 0 01-.37 7.071 7.512 7.512 0 01-6.07 3.62c-7.24.34-14.49.66-21.73.95-8.61.36-17.2.69-25.78.99-3.96-7.491-29.02-53.897-64.06-99.403a8.314 8.314 0 010-10.121c35.02-45.486 60.07-91.862 64.06-99.393 9.04.31 18.11.66 27.18 1.03 6.77.29 13.55.58 20.33.9 2.5.12 4.78 1.48 6.07 3.62a7.515 7.515 0 01.37 7.071c-.97 2.04-23.21 49.026-55.91 91.832 32.7 42.807 54.94 89.793 55.91 91.833z" fill="#77e0ab"></path><path d="M117.97 409.337c-35.15 45.626-60.28 92.202-64.16 99.543-8.3-.29-16.61-.61-24.93-.96-7.24-.29-14.49-.61-21.73-.95a7.512 7.512 0 01-6.07-3.62 7.515 7.515 0 01-.37-7.071c.97-2.04 23.21-49.026 55.91-91.832-32.7-42.805-54.94-89.791-55.91-91.832a7.515 7.515 0 01.37-7.071 7.512 7.512 0 016.07-3.62c6.78-.31 13.56-.61 20.34-.88 8.78-.37 17.56-.71 26.32-1.02 3.89 7.341 29.01 53.907 64.16 99.533a8.013 8.013 0 010 9.78z" fill="#ffe878"></path><g fill="#dcefff"><path d="M75.412 59.56a7.5 7.5 0 00-13.926 3.156c-.151 1.711-3.67 42.457-.006 88.976.325 4.13 3.935 7.204 8.065 6.889a7.501 7.501 0 006.888-8.067c-1.812-23.01-1.79-44.891-1.327-60.886 8.928 16.407 21.194 39.997 32.034 64.51a7.502 7.502 0 008.696 4.237 7.5 7.5 0 005.64-7.861c-3.56-45.215-.042-86.07-.006-86.477a7.501 7.501 0 00-6.811-8.132c-4.115-.356-7.766 2.684-8.131 6.811-.108 1.227-1.945 22.496-1.63 51.57-15.41-30.84-29.3-54.412-29.486-54.726zM195.985 70.867c4.094.238 7.667-2.955 7.887-7.093a7.5 7.5 0 00-7.092-7.888c-24.674-1.313-47.228-.053-48.175.002a7.5 7.5 0 00-7.043 6.827c-.151 1.711-3.67 42.457-.006 88.976a7.499 7.499 0 007.049 6.899c.625.036 10.66.597 24.508.597 7.133 0 15.278-.149 23.667-.595a7.5 7.5 0 007.092-7.888c-.219-4.137-3.801-7.313-7.887-7.093-16.063.853-31.518.563-39.95.278-.665-10.278-.982-20.232-1.082-29.423 4.53.142 10.699.277 17.736.277 7.373 0 15.701-.149 24.091-.595a7.5 7.5 0 007.092-7.888c-.219-4.137-3.801-7.324-7.887-7.093-15.972.848-32.06.566-41.011.283.168-12.546.677-22.697 1.063-28.864 8.43-.281 23.886-.572 39.948.281zM245.511 159.183a7.502 7.502 0 007.222-5.476c5.055-18.04 9.15-35.508 12.27-50.129 3.119 14.621 7.216 32.089 12.271 50.129a7.5 7.5 0 0014.444 0c12.966-46.268 19.616-88.757 19.682-89.181a7.5 7.5 0 10-14.823-2.298c-.051.328-4.122 26.317-12.081 59.548-7.958-33.231-12.03-59.22-12.081-59.548a7.5 7.5 0 00-14.822 0c-.051.328-4.122 26.317-12.08 59.548-7.959-33.231-12.03-59.22-12.081-59.548a7.501 7.501 0 00-14.823 2.298c.065.424 6.716 42.913 19.682 89.181a7.498 7.498 0 007.22 5.476zM211.631 456.228a7.5 7.5 0 007.5-7.501V425.63c12.721-23.598 21.703-61.853 22.088-63.509a7.501 7.501 0 00-5.604-9.005 7.501 7.501 0 00-9.005 5.605c-.075.321-6.18 26.309-14.979 47.592-8.798-21.282-14.902-47.27-14.978-47.592-.939-4.035-4.973-6.54-9.005-5.605a7.5 7.5 0 00-5.604 9.005c.385 1.657 9.367 39.911 22.087 63.509v23.097a7.5 7.5 0 007.5 7.501zM304.512 368.491a7.5 7.5 0 007.886-7.093 7.5 7.5 0 00-7.092-7.888c-24.732-1.317-42.545-.045-43.29.01a7.5 7.5 0 00-6.923 6.819c-.151 1.711-3.669 42.457-.006 88.976a7.5 7.5 0 006.929 6.892c.493.036 8.449.604 20.936.604 6.395 0 13.978-.148 22.354-.594a7.5 7.5 0 007.092-7.888c-.22-4.138-3.788-7.315-7.887-7.093-15.149.804-27.758.592-34.941.327-.666-10.277-.984-20.231-1.085-29.423 3.674.122 8.456.228 14.04.228 6.633 0 14.4-.148 22.781-.594 4.137-.22 7.312-3.751 7.092-7.888s-3.788-7.328-7.887-7.093c-15.099.801-28.322.592-36.006.329.168-12.6.68-22.789 1.066-28.959 7.186-.264 19.796-.475 34.941.328zM330.899 456.228a7.504 7.504 0 007.344-6.017c.048-.236 2.105-10.337 5.6-24.217 6.134-.254 16.77-.523 28.055-.029 3.499 13.896 5.559 24.01 5.607 24.247a7.498 7.498 0 008.836 5.868 7.5 7.5 0 005.867-8.836c-.474-2.35-11.791-57.907-27.602-90.126a7.5 7.5 0 00-13.465.001c-15.809 32.217-27.127 87.775-27.601 90.125a7.502 7.502 0 007.359 8.984zm26.975-76.639c3.754 10.017 7.142 20.98 10.004 31.217a355.487 355.487 0 00-20.016.028c2.864-10.245 6.254-21.219 10.012-31.245zM463.352 382.588c0-13.419-5.883-20.705-10.818-24.455-14.778-11.229-38.393-5.094-41.038-4.359a7.501 7.501 0 00-5.459 6.565c-.151 1.711-3.67 42.457-.006 88.975a7.5 7.5 0 008.066 6.889 7.5 7.5 0 006.888-8.066c-.969-12.303-1.413-24.28-1.547-35.209 4.353.367 9.784.478 15.343-.289 3.258 8.017 9.287 23.393 13.908 38.308a7.503 7.503 0 007.162 5.283 7.501 7.501 0 007.166-9.723c-4.613-14.891-10.435-29.88-13.872-38.377a29.243 29.243 0 004.144-2.778c4.591-3.698 10.063-10.649 10.063-22.764zm-19.456 11.066c-5.946 4.806-16.932 4.944-24.457 4.193.166-13.637.739-24.525 1.138-30.67 6.841-1.079 17.123-1.491 22.903 2.917 3.278 2.501 4.872 6.588 4.872 12.494 0 6.691-2.543 9.52-4.456 11.066z"></path></g><circle cx="345.68" cy="106.954" fill="#ffa1a8" r="7.5"></circle><circle cx="345.68" cy="63.959" fill="#ffa1a8" r="7.5"></circle><circle cx="345.68" cy="149.94" fill="#ffa1a8" r="7.5"></circle><circle cx="154.581" cy="404.356" fill="#ffa1a8" r="7.5"></circle><circle cx="154.581" cy="361.36" fill="#ffa1a8" r="7.5"></circle><circle cx="154.581" cy="447.342" fill="#ffa1a8" r="7.5"></circle><path d="M511.29 199.38a7.515 7.515 0 01-.37 7.071 7.512 7.512 0 01-6.07 3.62c-7.24.34-14.49.66-21.73.95-30.26-61.298-60.29-104.063-60.29-104.063 26.46-37.245 51.99-84.381 61.69-102.833 6.77.29 13.55.58 20.33.9 2.5.12 4.78 1.48 6.07 3.62a7.515 7.515 0 01.37 7.071c-.97 2.04-23.21 49.026-55.91 91.832 32.7 42.806 54.94 89.792 55.91 91.832z" fill="#65c1b0"></path><path d="M89.17 403.856s-30.03 42.765-60.29 104.063c-7.24-.29-14.49-.61-21.73-.95a7.512 7.512 0 01-6.07-3.62 7.515 7.515 0 01-.37-7.071c.97-2.04 23.21-49.026 55.91-91.832-32.7-42.805-54.94-89.791-55.91-91.832a7.515 7.515 0 01.37-7.071 7.512 7.512 0 016.07-3.62c6.78-.31 13.56-.61 20.34-.88 9.71 18.462 35.23 65.578 61.68 102.813z" fill="#ffd37b"></path></svg></div><div><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1P1bxvGlBd5ZZSQpEP3jU6
      _3CN_AXY57wWl_TqwlhrJGA
      
      
      
      
      
      _1sBe2-WDDY_9PlsEYJwvjg _26vY854tWeeuNF4DNE46KH
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="242"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  ">Read More</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  "><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      _1tbDTY-lHBDqrpuEOM5JRv
      _1P1bxvGlBd5ZZSQpEP3jU6
      _3CN_AXY57wWl_TqwlhrJGA
      
      
      
      
      
      _1sBe2-WDDY_9PlsEYJwvjg
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="241"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  ">Close</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  "><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button></div></div></div><div class="_31OAdxB1vd19TNmUF9dXpr _6dygKJ8cVqBIjtZ6BCO2K " wfd-id="197"><div class="M9tQq9RcMvdAAt8E6oPcq" aria-label="Close" wfd-id="201"></div><h3 class="_1-cxDcyzjf1fL-hXW8LaYK">New Year's Deal!</h3><p class="
        _7YBGHdKFC47uLT2nebFIE
        Jx92_FrVUSyS7pGO6XSTQ
        _2Zbe48FGB-Jwe2NBhszJ5E
        _11evgMqqYP8hxqTxzy9TVZ
        _23Q8b3Z04QaZwYGwu_QVzH
        
    ">Enjoy a 25% sale on AlgoExpert!</p><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="_1ylMf37QXCMVeX8o8d6_BD"><path d="M496.82 301.923c-116.133-54.825-201.845-94.297-201.845-94.297L15.18 210.071s76.649 50.286 180.847 94.405z" fill="#b2527e"></path><path d="M503.86 308.124a7.512 7.512 0 00-7.04-6.201c-2.29-.1-217.1-9.861-443.01-1.9l22.81 104.423-22.81 104.433C119.17 511.18 183.6 512 242.23 512c143.98 0 252.96-4.961 254.59-5.031a7.5 7.5 0 007.04-6.201c.33-1.89 8.14-46.946 8.14-96.323s-7.81-94.431-8.14-96.321zM15.18 5.025a7.5 7.5 0 00-7.04 6.201C7.81 13.116 0 58.172 0 107.548s7.81 94.432 8.14 96.322a7.512 7.512 0 007.04 6.201c1.63.07 110.59 5.021 254.59 5.021 58.37 0 122.5-.81 187.57-3.08l-21.96-104.463L457.34 3.095C231.75-4.816 17.47 4.925 15.18 5.025z" fill="#ff5f85"></path><path d="M511.29 199.38a7.515 7.515 0 01-.37 7.071 7.512 7.512 0 01-6.07 3.62c-7.24.34-14.49.66-21.73.95-8.61.36-17.2.69-25.78.99-3.96-7.491-29.02-53.897-64.06-99.403a8.314 8.314 0 010-10.121c35.02-45.486 60.07-91.862 64.06-99.393 9.04.31 18.11.66 27.18 1.03 6.77.29 13.55.58 20.33.9 2.5.12 4.78 1.48 6.07 3.62a7.515 7.515 0 01.37 7.071c-.97 2.04-23.21 49.026-55.91 91.832 32.7 42.807 54.94 89.793 55.91 91.833z" fill="#77e0ab"></path><path d="M117.97 409.337c-35.15 45.626-60.28 92.202-64.16 99.543-8.3-.29-16.61-.61-24.93-.96-7.24-.29-14.49-.61-21.73-.95a7.512 7.512 0 01-6.07-3.62 7.515 7.515 0 01-.37-7.071c.97-2.04 23.21-49.026 55.91-91.832-32.7-42.805-54.94-89.791-55.91-91.832a7.515 7.515 0 01.37-7.071 7.512 7.512 0 016.07-3.62c6.78-.31 13.56-.61 20.34-.88 8.78-.37 17.56-.71 26.32-1.02 3.89 7.341 29.01 53.907 64.16 99.533a8.013 8.013 0 010 9.78z" fill="#ffe878"></path><g fill="#dcefff"><path d="M75.412 59.56a7.5 7.5 0 00-13.926 3.156c-.151 1.711-3.67 42.457-.006 88.976.325 4.13 3.935 7.204 8.065 6.889a7.501 7.501 0 006.888-8.067c-1.812-23.01-1.79-44.891-1.327-60.886 8.928 16.407 21.194 39.997 32.034 64.51a7.502 7.502 0 008.696 4.237 7.5 7.5 0 005.64-7.861c-3.56-45.215-.042-86.07-.006-86.477a7.501 7.501 0 00-6.811-8.132c-4.115-.356-7.766 2.684-8.131 6.811-.108 1.227-1.945 22.496-1.63 51.57-15.41-30.84-29.3-54.412-29.486-54.726zM195.985 70.867c4.094.238 7.667-2.955 7.887-7.093a7.5 7.5 0 00-7.092-7.888c-24.674-1.313-47.228-.053-48.175.002a7.5 7.5 0 00-7.043 6.827c-.151 1.711-3.67 42.457-.006 88.976a7.499 7.499 0 007.049 6.899c.625.036 10.66.597 24.508.597 7.133 0 15.278-.149 23.667-.595a7.5 7.5 0 007.092-7.888c-.219-4.137-3.801-7.313-7.887-7.093-16.063.853-31.518.563-39.95.278-.665-10.278-.982-20.232-1.082-29.423 4.53.142 10.699.277 17.736.277 7.373 0 15.701-.149 24.091-.595a7.5 7.5 0 007.092-7.888c-.219-4.137-3.801-7.324-7.887-7.093-15.972.848-32.06.566-41.011.283.168-12.546.677-22.697 1.063-28.864 8.43-.281 23.886-.572 39.948.281zM245.511 159.183a7.502 7.502 0 007.222-5.476c5.055-18.04 9.15-35.508 12.27-50.129 3.119 14.621 7.216 32.089 12.271 50.129a7.5 7.5 0 0014.444 0c12.966-46.268 19.616-88.757 19.682-89.181a7.5 7.5 0 10-14.823-2.298c-.051.328-4.122 26.317-12.081 59.548-7.958-33.231-12.03-59.22-12.081-59.548a7.5 7.5 0 00-14.822 0c-.051.328-4.122 26.317-12.08 59.548-7.959-33.231-12.03-59.22-12.081-59.548a7.501 7.501 0 00-14.823 2.298c.065.424 6.716 42.913 19.682 89.181a7.498 7.498 0 007.22 5.476zM211.631 456.228a7.5 7.5 0 007.5-7.501V425.63c12.721-23.598 21.703-61.853 22.088-63.509a7.501 7.501 0 00-5.604-9.005 7.501 7.501 0 00-9.005 5.605c-.075.321-6.18 26.309-14.979 47.592-8.798-21.282-14.902-47.27-14.978-47.592-.939-4.035-4.973-6.54-9.005-5.605a7.5 7.5 0 00-5.604 9.005c.385 1.657 9.367 39.911 22.087 63.509v23.097a7.5 7.5 0 007.5 7.501zM304.512 368.491a7.5 7.5 0 007.886-7.093 7.5 7.5 0 00-7.092-7.888c-24.732-1.317-42.545-.045-43.29.01a7.5 7.5 0 00-6.923 6.819c-.151 1.711-3.669 42.457-.006 88.976a7.5 7.5 0 006.929 6.892c.493.036 8.449.604 20.936.604 6.395 0 13.978-.148 22.354-.594a7.5 7.5 0 007.092-7.888c-.22-4.138-3.788-7.315-7.887-7.093-15.149.804-27.758.592-34.941.327-.666-10.277-.984-20.231-1.085-29.423 3.674.122 8.456.228 14.04.228 6.633 0 14.4-.148 22.781-.594 4.137-.22 7.312-3.751 7.092-7.888s-3.788-7.328-7.887-7.093c-15.099.801-28.322.592-36.006.329.168-12.6.68-22.789 1.066-28.959 7.186-.264 19.796-.475 34.941.328zM330.899 456.228a7.504 7.504 0 007.344-6.017c.048-.236 2.105-10.337 5.6-24.217 6.134-.254 16.77-.523 28.055-.029 3.499 13.896 5.559 24.01 5.607 24.247a7.498 7.498 0 008.836 5.868 7.5 7.5 0 005.867-8.836c-.474-2.35-11.791-57.907-27.602-90.126a7.5 7.5 0 00-13.465.001c-15.809 32.217-27.127 87.775-27.601 90.125a7.502 7.502 0 007.359 8.984zm26.975-76.639c3.754 10.017 7.142 20.98 10.004 31.217a355.487 355.487 0 00-20.016.028c2.864-10.245 6.254-21.219 10.012-31.245zM463.352 382.588c0-13.419-5.883-20.705-10.818-24.455-14.778-11.229-38.393-5.094-41.038-4.359a7.501 7.501 0 00-5.459 6.565c-.151 1.711-3.67 42.457-.006 88.975a7.5 7.5 0 008.066 6.889 7.5 7.5 0 006.888-8.066c-.969-12.303-1.413-24.28-1.547-35.209 4.353.367 9.784.478 15.343-.289 3.258 8.017 9.287 23.393 13.908 38.308a7.503 7.503 0 007.162 5.283 7.501 7.501 0 007.166-9.723c-4.613-14.891-10.435-29.88-13.872-38.377a29.243 29.243 0 004.144-2.778c4.591-3.698 10.063-10.649 10.063-22.764zm-19.456 11.066c-5.946 4.806-16.932 4.944-24.457 4.193.166-13.637.739-24.525 1.138-30.67 6.841-1.079 17.123-1.491 22.903 2.917 3.278 2.501 4.872 6.588 4.872 12.494 0 6.691-2.543 9.52-4.456 11.066z"></path></g><circle cx="345.68" cy="106.954" fill="#ffa1a8" r="7.5"></circle><circle cx="345.68" cy="63.959" fill="#ffa1a8" r="7.5"></circle><circle cx="345.68" cy="149.94" fill="#ffa1a8" r="7.5"></circle><circle cx="154.581" cy="404.356" fill="#ffa1a8" r="7.5"></circle><circle cx="154.581" cy="361.36" fill="#ffa1a8" r="7.5"></circle><circle cx="154.581" cy="447.342" fill="#ffa1a8" r="7.5"></circle><path d="M511.29 199.38a7.515 7.515 0 01-.37 7.071 7.512 7.512 0 01-6.07 3.62c-7.24.34-14.49.66-21.73.95-30.26-61.298-60.29-104.063-60.29-104.063 26.46-37.245 51.99-84.381 61.69-102.833 6.77.29 13.55.58 20.33.9 2.5.12 4.78 1.48 6.07 3.62a7.515 7.515 0 01.37 7.071c-.97 2.04-23.21 49.026-55.91 91.832 32.7 42.806 54.94 89.792 55.91 91.832z" fill="#65c1b0"></path><path d="M89.17 403.856s-30.03 42.765-60.29 104.063c-7.24-.29-14.49-.61-21.73-.95a7.512 7.512 0 01-6.07-3.62 7.515 7.515 0 01-.37-7.071c.97-2.04 23.21-49.026 55.91-91.832-32.7-42.805-54.94-89.791-55.91-91.832a7.515 7.515 0 01.37-7.071 7.512 7.512 0 016.07-3.62c6.78-.31 13.56-.61 20.34-.88 9.71 18.462 35.23 65.578 61.68 102.813z" fill="#ffd37b"></path></svg><p class="
        _7YBGHdKFC47uLT2nebFIE
        Jx92_FrVUSyS7pGO6XSTQ
        _2Zbe48FGB-Jwe2NBhszJ5E
        _11evgMqqYP8hxqTxzy9TVZ
        _23Q8b3Z04QaZwYGwu_QVzH
        
    ">Sale ends in <br> <b><p class="_3ybn1WGl4bpUftJIBtRWYy">-1:-1:-1</p></b></p><div wfd-id="198"><a class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      _3CN_AXY57wWl_TqwlhrJGA
      
      
      _10oIXTTgmWKJQ5nnG9zXuL
      
      
      
    " href="https://www.algoexpert.io/purchase" data-tip-disable="false" tabindex="0"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="200">Buy Now!</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="199"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></a></div></div><div wfd-id="194"><div class="announcementsContainer" style="transition: transform 1000ms ease 0s; transform: translateX(-310px);" wfd-id="195"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88" fill="currentColor" class="announcementsContainerCross" alt="close announcement cross" aria-label="Close"><path d="M.324 1.909a1.14 1.14 0 010-1.587 1.14 1.14 0 011.587 0l9.523 9.539L20.973.322a1.12 1.12 0 011.571 0 1.112 1.112 0 010 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 010 1.587 1.12 1.12 0 01-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 01-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"></path></svg><div class="announcementMessagesContainer" wfd-id="196"></div></div></div><div class="_3m1-fShUxOF2LuMvdtNlbz VlFbwpYhNX9y1S6Dl3WQ8 _2djuzLL1hPk50RjMRv4XHc dark" wfd-id="2"><div class="rUIii3Jt2fNHbiqwC5nkm cu3hST6juYL-ur8R-KsVB _1eXdwSQJ_RmDLC04PVaxDr" wfd-id="171"><div class="uvfWKjjhdt97BoJNBk4yD" wfd-id="193"></div><div class="_3nOgogXzAEkouCtFiCOyuG" id="editor" wfd-id="172"><div class="vertical reflex-container" wfd-id="173"><div class="vertical reflex-element" style="flex: 0.5 1 0%;" wfd-id="184"><div class="horizontal reflex-container" wfd-id="185"><div class="horizontal reflex-element" style="flex: 0.65 1 0%;" wfd-id="190"><div class="_1O-lK2Hf0kOgX3lItU-0pl" wfd-id="191"><div class="_2p1UW3n4BV-eb9JGUXJRxn" wfd-id="192"></div></div></div><div class="_2V5Rhcxrw5Q4a4W_fXQLcl PrrgIwSlAIqI6TunP4Vbf  reflex-splitter" wfd-id="189"></div><div class="horizontal reflex-element" style="flex: 0.35 1 0%;" wfd-id="186"><div class="_1O-lK2Hf0kOgX3lItU-0pl" wfd-id="187"><div class="_2p1UW3n4BV-eb9JGUXJRxn" wfd-id="188"></div></div></div></div></div><div class="_2V5Rhcxrw5Q4a4W_fXQLcl _3oT9I7_Ax5CwGv7MDaybTH  reflex-splitter" wfd-id="183"></div><div class="vertical reflex-element" style="flex: 0.5 1 0%;" wfd-id="174"><div class="horizontal reflex-container" wfd-id="175"><div class="horizontal reflex-element" style="flex: 0.65 1 0%;" wfd-id="180"><div class="_1O-lK2Hf0kOgX3lItU-0pl" wfd-id="181"><div class="_2p1UW3n4BV-eb9JGUXJRxn" wfd-id="182"></div></div></div><div class="_2V5Rhcxrw5Q4a4W_fXQLcl PrrgIwSlAIqI6TunP4Vbf  reflex-splitter" wfd-id="179"></div><div class="horizontal reflex-element" style="flex: 0.35 1 0%;" wfd-id="176"><div class="_1O-lK2Hf0kOgX3lItU-0pl" wfd-id="177"><div class="_2p1UW3n4BV-eb9JGUXJRxn" wfd-id="178"></div></div></div></div></div></div></div></div><div class="_5Q9ssXorli3FkajB4nxp2  _1vwVZIbfp88FblVM-krK8T" wfd-id="170"><div class="_2mgy1_j_5PFwYIQLlZ8-NS"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484.836 484.836" fill="currentColor" class="_3-i5ZJTkJDRqgI79wvBW53"><path d="M223.083 93.939c0-20.54-16.71-37.25-37.25-37.25s-37.25 16.71-37.25 37.25 16.71 37.25 37.25 37.25 37.25-16.71 37.25-37.25zm-37.25 28.75c-15.853 0-28.75-12.897-28.75-28.75s12.897-28.75 28.75-28.75 28.75 12.897 28.75 28.75-12.897 28.75-28.75 28.75z"></path><path d="M185.833 72.689c-11.717 0-21.25 9.532-21.25 21.25s9.533 21.25 21.25 21.25 21.25-9.532 21.25-21.25-9.533-21.25-21.25-21.25zm0 34c-7.03 0-12.75-5.72-12.75-12.75s5.72-12.75 12.75-12.75 12.75 5.72 12.75 12.75c0 7.031-5.72 12.75-12.75 12.75zM301.973 131.189c20.54 0 37.25-16.71 37.25-37.25s-16.71-37.25-37.25-37.25-37.25 16.71-37.25 37.25 16.71 37.25 37.25 37.25zm0-66c15.853 0 28.75 12.897 28.75 28.75s-12.897 28.75-28.75 28.75-28.75-12.897-28.75-28.75c0-15.852 12.897-28.75 28.75-28.75z"></path><path d="M301.973 115.189c11.717 0 21.25-9.532 21.25-21.25s-9.533-21.25-21.25-21.25-21.25 9.532-21.25 21.25 9.532 21.25 21.25 21.25zm0-34c7.03 0 12.75 5.72 12.75 12.75s-5.72 12.75-12.75 12.75-12.75-5.72-12.75-12.75 5.719-12.75 12.75-12.75z"></path><path d="M410.489 344.892V238.561c0-24.19-19.681-43.871-43.871-43.871h-81.525v-23.025h55.115c12.82 0 23.25-10.43 23.25-23.25v-17.23c20.424-.137 37-16.788 37-37.244s-16.576-37.107-37-37.244V48.42c0-12.82-10.43-23.25-23.25-23.25H325.52C302.252 2.908 269.761 0 243.903 0s-58.349 2.908-81.617 25.17h-14.689c-12.82 0-23.25 10.43-23.25 23.25v8.275c-20.424.137-37 16.788-37 37.244s16.576 37.107 37 37.244v17.23c0 12.82 10.43 23.25 23.25 23.25h55.115v23.025h-84.494c-24.19 0-43.871 19.681-43.871 43.871V344.89c-24.594 2.187-43.944 22.895-43.944 48.048 0 3.662.426 7.351 1.266 10.963a4.25 4.25 0 004.14 3.287h22.724a4.252 4.252 0 003.805-6.145 18.029 18.029 0 01-1.902-8.105c0-10.046 8.173-18.219 18.219-18.219 10.046 0 18.219 8.173 18.219 18.219 0 2.844-.64 5.57-1.902 8.105a4.252 4.252 0 003.804 6.145H121.5a4.25 4.25 0 004.14-3.287 48.476 48.476 0 001.266-10.963c0-25.191-19.409-45.922-44.056-48.057v-106.32c0-19.504 15.867-35.371 35.371-35.371h43.657a23.144 23.144 0 00-5.291 14.75v144.998c0 10.436 6.911 19.286 16.396 22.218a13.983 13.983 0 00-1.848 6.946c0 3.824 1.537 7.291 4.019 9.832a14.025 14.025 0 00-4.019 9.83c0 3.824 1.537 7.292 4.02 9.832a14.03 14.03 0 00-.001 19.664 14.025 14.025 0 00-2.859 15.412H145.21c-7.765 0-14.082 6.317-14.082 14.082 0 7.765 6.317 14.082 14.082 14.082h75.673c7.765 0 14.082-6.317 14.082-14.082 0-3.824-1.537-7.292-4.02-9.832a14.03 14.03 0 00.001-19.662c2.482-2.541 4.019-6.008 4.019-9.832 0-3.824-1.537-7.292-4.02-9.832a14.03 14.03 0 00.001-19.662c2.482-2.541 4.019-6.008 4.019-9.832a13.98 13.98 0 00-1.32-5.914h14.378a13.98 13.98 0 00-1.32 5.914c0 3.824 1.537 7.291 4.019 9.832a14.025 14.025 0 00-4.019 9.83c0 3.824 1.537 7.292 4.02 9.832a14.03 14.03 0 00-.001 19.664 14.025 14.025 0 00-4.019 9.83c0 3.824 1.537 7.292 4.02 9.832a14.03 14.03 0 00-4.02 9.832c0 7.765 6.317 14.082 14.081 14.082h75.673c7.765 0 14.081-6.317 14.081-14.082 0-7.765-6.317-14.082-14.081-14.082h-27.081a14.025 14.025 0 00-2.859-15.412c2.482-2.541 4.019-6.008 4.019-9.832 0-3.824-1.537-7.292-4.02-9.832a14.03 14.03 0 00.001-19.662c2.482-2.541 4.019-6.008 4.019-9.832 0-2.127-.488-4.137-1.336-5.947 12.252-.641 22.022-10.809 22.022-23.217V217.939a23.14 23.14 0 00-5.292-14.75h40.687c19.504 0 35.371 15.867 35.371 35.371v106.322c-24.647 2.135-44.056 22.865-44.056 48.057 0 3.662.426 7.351 1.266 10.963a4.25 4.25 0 004.14 3.287h22.724a4.252 4.252 0 003.804-6.145 18.029 18.029 0 01-1.902-8.105c0-10.046 8.173-18.219 18.219-18.219s18.219 8.173 18.219 18.219c0 2.844-.64 5.57-1.902 8.105a4.252 4.252 0 003.804 6.145h22.724a4.25 4.25 0 004.14-3.287 48.476 48.476 0 001.266-10.963c-.001-25.153-19.351-45.861-43.945-48.047zm-18.53-250.953c0 15.769-12.762 28.608-28.5 28.744V65.195c15.738.136 28.5 12.976 28.5 28.744zm-296.112 0c0-15.769 12.762-28.608 28.5-28.744v57.488c-15.738-.135-28.5-12.975-28.5-28.744zm22.556 299.001a39.71 39.71 0 01-.422 5.75h-13.227c.412-1.872.619-3.792.619-5.75 0-14.732-11.986-26.719-26.719-26.719s-26.719 11.986-26.719 26.719c0 1.958.207 3.878.619 5.75H39.325a39.57 39.57 0 01-.422-5.75c0-21.918 17.832-39.75 39.75-39.75s39.75 17.832 39.75 39.75zM243.903 8.5c31.295 0 52.54 5.068 68.451 16.67H175.452c15.91-11.602 37.156-16.67 68.451-16.67zM132.847 148.414V48.42c0-8.133 6.617-14.75 14.75-14.75H340.209c8.133 0 14.75 6.617 14.75 14.75v99.994c0 8.133-6.617 14.75-14.75 14.75H147.597c-8.134 0-14.75-6.617-14.75-14.75zm78.365 23.25h65.382v23.025h-65.382v-23.025zm9.671 226.02h-35.67c-3.078 0-5.581-2.504-5.581-5.582s2.504-5.582 5.581-5.582h35.67c3.078 0 5.582 2.504 5.582 5.582s-2.504 5.582-5.582 5.582zm5.582 14.08a5.588 5.588 0 01-5.582 5.582h-35.67a5.587 5.587 0 01-5.581-5.582 5.587 5.587 0 015.581-5.58h35.67a5.587 5.587 0 015.582 5.58zm0 19.664a5.588 5.588 0 01-5.582 5.582h-35.67a5.587 5.587 0 01-5.581-5.582 5.588 5.588 0 015.581-5.582h35.67a5.588 5.588 0 015.582 5.582zm-46.833 19.662a5.587 5.587 0 015.581-5.58h35.67a5.587 5.587 0 015.582 5.58 5.588 5.588 0 01-5.582 5.582h-35.67a5.588 5.588 0 01-5.581-5.582zm41.251 25.246H145.21a5.588 5.588 0 01-5.582-5.582 5.588 5.588 0 015.582-5.582h75.673a5.588 5.588 0 015.582 5.582 5.588 5.588 0 01-5.582 5.582zm75.572-78.652h-35.67c-3.078 0-5.581-2.504-5.581-5.582s2.504-5.582 5.581-5.582h35.67c3.078 0 5.582 2.504 5.582 5.582s-2.505 5.582-5.582 5.582zm5.581 14.08a5.588 5.588 0 01-5.582 5.582h-35.67a5.587 5.587 0 01-5.581-5.582 5.587 5.587 0 015.581-5.58h35.67a5.587 5.587 0 015.582 5.58zm0 19.664a5.588 5.588 0 01-5.582 5.582h-35.67a5.587 5.587 0 01-5.581-5.582 5.588 5.588 0 015.581-5.582h35.67a5.588 5.588 0 015.582 5.582zm40.003 39.326a5.588 5.588 0 01-5.581 5.582h-75.673a5.587 5.587 0 01-5.581-5.582 5.588 5.588 0 015.581-5.582h75.673a5.588 5.588 0 015.581 5.582zm-81.254-14.082a5.587 5.587 0 01-5.581-5.582 5.587 5.587 0 015.581-5.58h35.67a5.587 5.587 0 015.582 5.58 5.588 5.588 0 01-5.582 5.582h-35.67zm61.938-238.733V325.17h-18.436a4.25 4.25 0 100 8.5h18.436v8.5H276.62a4.25 4.25 0 100 8.5h46.103v12.267c0 8.133-6.617 14.75-14.75 14.75h-128.14c-8.133 0-14.75-6.617-14.75-14.75V260.565c.296.065.601.105.916.105h9.334a4.25 4.25 0 100-8.5h-9.334c-.315 0-.62.039-.916.104V240.67h22.75a4.25 4.25 0 100-8.5h-22.75v-14.23c0-8.133 6.617-14.75 14.75-14.75H307.973c8.133-.001 14.75 6.617 14.75 14.749zM445.511 398.69h-13.227c.412-1.872.619-3.792.619-5.75 0-14.732-11.986-26.719-26.719-26.719s-26.719 11.986-26.719 26.719c0 1.958.207 3.878.619 5.75h-13.227a39.57 39.57 0 01-.422-5.75c0-21.918 17.832-39.75 39.75-39.75s39.75 17.832 39.75 39.75a39.876 39.876 0 01-.424 5.75z"></path><path d="M243.903 249.857c9.615 0 17.438-7.822 17.438-17.438 0-9.615-7.823-17.438-17.438-17.438-9.615 0-17.438 7.822-17.438 17.438s7.823 17.438 17.438 17.438zm0-26.375c4.928 0 8.938 4.01 8.938 8.938 0 4.928-4.01 8.938-8.938 8.938-4.928 0-8.938-4.01-8.938-8.938 0-4.928 4.01-8.938 8.938-8.938zM243.903 261.949c-11.574 0-20.991 9.416-20.991 20.99 0 11.574 9.417 20.99 20.991 20.99s20.991-9.416 20.991-20.99c0-11.574-9.417-20.99-20.991-20.99zm0 33.481c-6.887 0-12.491-5.603-12.491-12.49 0-6.887 5.604-12.49 12.491-12.49s12.491 5.603 12.491 12.49c0 6.886-5.604 12.49-12.491 12.49zM220.465 137.898a4.25 4.25 0 004.25 4.25h35.929a4.25 4.25 0 100-8.5h-35.929a4.25 4.25 0 00-4.25 4.25z"></path></svg><p class="_1dp1knbOJ9SiXmTe_rm6Xl">For a better Mock Interview experience, the workspace is not available on smaller devices.</p></div></div><div class="__react_component_tooltip-304517788 __react_component_tooltip place-bottom type-dark" data-id="tooltip" wfd-id="169"></div><div class="__react_component_tooltip-304517788 __react_component_tooltip place-left type-dark" id="left-tooltip" data-id="tooltip" wfd-id="168"></div><div class="nUvM51ihbpWZRYnR6A9QO _2nhh8xKv4-7u5-68PFWMGh" wfd-id="94"><a class="_2fbBLKrZBi0wL7ujBrG9qX" href="https://www.algoexpert.io/product"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABuCAMAAADmp0YAAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAECAwQFBgcH+Pn6+/z9/vBVGEbAAABi1JREFUaN6tWleC4yAMtQGbYtr9T7vJ2BSBQHhm+dnZJCDUngratu8S2sXvCpcS+/bHtR/yCj/HOSPyp9zEagUr/0LitL4+zT535i62y/DfURAmtEd59v2CdZ//3OB4LybhsKN+qOiIL3u+5MIODjIVIyGE33Pz4aLZXI4LbJP3X9dXC/xQ8DrXom74BW+nxXejeD6VmwVG8OHsBHTUgkXvOgDjLFtuKna7vweCASYdSJmdtc1qwLu4P9yS2MBiKvSmji9WScrr5py9JuL7zXqNmTNMRevnRDamaWb2ig3DkB9QRD4SLWbpUTM7PGXuNZEwEIasZNGzURQX1IDTmkjktFpdIw5eTN2ykf88ine9CQ80GwSQZRaVH+PP8fiJfZxyxUYVJqohG1ncNv87WeVA81gZy+4azpkXJQ6SU06hyTXRIf/fzsHtvp3Y9jDVfOsPgdc4Yth025Hh5GZJUwBV3P/IGE5FHJ1VoSbuWOu/D6xkHPD5/o8tk2DLmsh3MWrHLa0oildqOm4AKhcdaG5puervsBAApygzwhRT+/5CQC8ScwsB8wCI5Wh/vG/j32g9Bfbk0XHBVVr7ChQvIgC5Pv5oCBq+yXmIS5nmV3rhbpmGdQBiiN+bNqlQKzQ+GHmVrG2CqsVJgI4mrGRINDWSTXh5VHD1EWzICg8Q6y1JpWdk292UlcxHuthOUXks0e+IL2tSH2kR2lcRC7iPPLAt+dqmvlfSi5uI1+Px4kJoGDzDs3G45fGReA4glg+DomkVlr6wI2fvgfoxMD/KiZFM9arMGizXmxZk5cDRHc2Gk/ZPdA8mRxaRuCLDDHSz2Z1IHMGxTfcemdLEoTt4BCz1zB0eJKhEyQMVPBAqSbn7NLr6LkGdBE3RhsrkVYrIFBS0nrrQYqe5PquqqUTjLmqsdah7BoxXVcVX6BMiFWsd8DA032aDrXPGosADNARE4963idlIJ1g+A1u6UslLRJNDnhDCf9BCriQzRzKWZDalvmpjfLGoRMXvPC6lV4+yrelMs2/0uEaX8boGMIeXFLG7UjrInVzaVi1HfJUt5cNaY5d1Q+BokVG/yJWa39dsW2D+V4tz9lWanC2sQQYHLIq3RPaya6l5lQXGe1jfgepCH4+aQpxKYpufO0CX/ZWIm4hLgZQgYFa5JK66OdTnz6x2TIu2i/S6sFpDedDWy6qrKbEajK5BKitpwTR/kVvYRZwndEaKRoKVq1Oj6GBFthE0wcq1VOdFlkCvwlPdN5VhMHQsFWPTLsJehM16YzERa/XnTYH3Efx90MoJEuzVgaDlSGgRAOFk7FLzXd6HeMXaiz3nMtLCLniqxUIQ+y6ks3dBQ3NEw8G22c2sL3zEwSY5h1/RVe7jqi2nf6IFsUHkwtJUompLLT2AiiqO2wLPpeANjimVxGmQSLqLBkiDylJOqrZc56nVqo0PDjPDqi3XeaMiiA/yYITHUdU2rvOSs3R1nhw3cXAqmQbWwjN4jucmsdMhEpvSyL0CVFdEswCJhIP6SI/LvLgTLSLXmsMos05mjCCjoptdS3zgDZyL6ixBKma5FWU7v9ZLjbvCh+NvmmpL7cEUsCzd7KpY0Q1q6XeNTs9WGp3ZluRaxg9bthSN5PYS7RKv5WQkjXSsA9C48PxetdFpGsnB+bLau8xrZY6iVrVbTJN3kHddq3fylbeTZUXzsL8gMV76mnqtquAen+OgKx29rT6c5eQxHGJZMfkp6PGxeQ+BqXz9oy5hiIcKkUxKLJQU5THzhvbi/G7uwUndC8+yJc9Oj5dV9SZpf5QLD8x5dCdUcxwS7Sjgia8ln8qlHzyVh64nNcqU3fqjf/skXj1uDt8cOZj2GPxKFTYU+w3KBHIQ4yh39ag8y3RBdGJSKIyJ8GpWa6Tc3RJvwXMiu6rqckkXQQPU8JMxH64qpLJsLcZ8x3x2NJhuSNbK64rdk2/CoFECZw2e0YKmI/eR02nrQSqzEAJ30Ea4iss+EcjmavRrHVzo/zNEpo6fmbRco+5xOA7njvWZyMPOxuHGg31ie7XO0WCfxjrXz5TT+8nOAyVzJ+U9lfDfhy3hRNt3PvXc/rCAcQIcEPrmxl/q+PMA7FYGYPWt139Q6uryekUiBAAAAABJRU5ErkJggg==" class="_1qYZDi1MnepKq0vXjPaZ7N"><span class="_2zcvxaZ_ZZVyBZnJZzBz96" wfd-id="167">AlgoExpert</span></a><a class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      _257YpNJ3jO_Fd_W3lgsSeU
    " href="https://www.algoexpert.io/questions" data-tip="Questions List" data-tip-disable="false" tabindex="0" currentitem="false"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="166"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" class="EWClPyvLL2D8jXClm1XTw"><path d="M492 236H144.262c-11.046 0-20 8.954-20 20s8.954 20 20 20H492c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 86H144.262c-11.046 0-20 8.954-20 20s8.954 20 20 20H492c11.046 0 20-8.954 20-20s-8.954-20-20-20zM492 386H144.262c-11.046 0-20 8.954-20 20s8.954 20 20 20H492c11.046 0 20-8.954 20-20s-8.954-20-20-20z"></path><circle cx="27" cy="106" r="27"></circle><circle cx="27" cy="256" r="27"></circle><circle cx="27" cy="406" r="27"></circle></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="165"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></a><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      _257YpNJ3jO_Fd_W3lgsSeU
    " type="button" data-tip="Next Question" data-tip-disable="false" tabindex="0" currentitem="false" wfd-id="240"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="164"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 268.832 268.832" class="EWClPyvLL2D8jXClm1XTw"><path d="M265.171 125.577l-80-80c-4.881-4.881-12.797-4.881-17.678 0-4.882 4.882-4.882 12.796 0 17.678l58.661 58.661H12.5c-6.903 0-12.5 5.597-12.5 12.5 0 6.902 5.597 12.5 12.5 12.5h213.654l-58.659 58.661c-4.882 4.882-4.882 12.796 0 17.678 2.44 2.439 5.64 3.661 8.839 3.661s6.398-1.222 8.839-3.661l79.998-80c4.882-4.882 4.882-12.796 0-17.678z"></path></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="163"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button><div class="Qs5LuppzFlIFP2vbr9GCg _22SGvByDg1n0xqelpDjJsV" style="min-width: 143px;" wfd-id="157"><button class="
    _39l6kdsveGLqC-djj_0iWb 
    _3vkg_i2SJV41YIUlAx2S83 
    
    
    _1VAa0vRSkmicLBfKvaQgGa
  " data-tip="Workspace Layout" data-tip-disable="false" type="button" tabindex="0" currentitem="false" wfd-id="239"><span class="V5FskHRl4WUCiuQR4Zl5g" wfd-id="162">Quad Layout</span><div class="u-flexSpacer" wfd-id="161"></div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 292.362 292.362" class="QFPh3JhPHr52LrFQ2kxNc undefined "><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path></svg></button><ul class="_2hYm9ciHClIn4jNdhK909W  yY5vZ2MbqhOVqmS30XXJL dv76m5e2RM3OJujnzUOBL" style="min-width: 100%;" wfd-id="158"><li data-index="0" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4 _2RweJABdNjr5cvThcEs5v4" wfd-id="160">Quad Layout</li><li data-index="1" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="159">Tri Layout</li></ul></div><div class="Qs5LuppzFlIFP2vbr9GCg _22SGvByDg1n0xqelpDjJsV" style="min-width: 128px;" wfd-id="144"><button class="
    _39l6kdsveGLqC-djj_0iWb 
    _3vkg_i2SJV41YIUlAx2S83 
    
    
    _1VAa0vRSkmicLBfKvaQgGa
  " data-tip="Programming Language" data-tip-disable="false" type="button" tabindex="0" currentitem="false" wfd-id="238"><span class="V5FskHRl4WUCiuQR4Zl5g" wfd-id="156">JavaScript</span><div class="u-flexSpacer" wfd-id="155"></div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 292.362 292.362" class="QFPh3JhPHr52LrFQ2kxNc undefined "><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path></svg></button><ul class="_2hYm9ciHClIn4jNdhK909W  yY5vZ2MbqhOVqmS30XXJL dv76m5e2RM3OJujnzUOBL" style="min-width: 100%;" wfd-id="145"><li data-index="0" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="154">C#</li><li data-index="1" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="153">C++</li><li data-index="2" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="152">Go</li><li data-index="3" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="151">Java</li><li data-index="4" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4 _2RweJABdNjr5cvThcEs5v4" wfd-id="150">JavaScript</li><li data-index="5" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="149">Kotlin</li><li data-index="6" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="148">Python</li><li data-index="7" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="147">Swift</li><li data-index="8" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="146">TypeScript</li></ul></div><div class="Qs5LuppzFlIFP2vbr9GCg _22SGvByDg1n0xqelpDjJsV" style="min-width: 89px;" wfd-id="133"><button class="
    _39l6kdsveGLqC-djj_0iWb 
    _3vkg_i2SJV41YIUlAx2S83 
    
    
    _1VAa0vRSkmicLBfKvaQgGa
  " data-tip="Editor Font Size" data-tip-disable="false" type="button" tabindex="0" currentitem="false" wfd-id="237"><span class="V5FskHRl4WUCiuQR4Zl5g" wfd-id="143">14px</span><div class="u-flexSpacer" wfd-id="142"></div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 292.362 292.362" class="QFPh3JhPHr52LrFQ2kxNc undefined "><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path></svg></button><ul class="_2hYm9ciHClIn4jNdhK909W  yY5vZ2MbqhOVqmS30XXJL dv76m5e2RM3OJujnzUOBL" style="min-width: 100%;" wfd-id="134"><li data-index="0" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="141">12px</li><li data-index="1" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="140">13px</li><li data-index="2" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4 _2RweJABdNjr5cvThcEs5v4" wfd-id="139">14px</li><li data-index="3" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="138">15px</li><li data-index="4" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="137">16px</li><li data-index="5" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="136">17px</li><li data-index="6" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="135">18px</li></ul></div><div class="Qs5LuppzFlIFP2vbr9GCg _22SGvByDg1n0xqelpDjJsV" style="min-width: 111px;" wfd-id="126"><button class="
    _39l6kdsveGLqC-djj_0iWb 
    _3vkg_i2SJV41YIUlAx2S83 
    
    
    _1VAa0vRSkmicLBfKvaQgGa
  " data-tip="Editor Key Maps" data-tip-disable="false" type="button" tabindex="0" currentitem="false" wfd-id="236"><span class="V5FskHRl4WUCiuQR4Zl5g" wfd-id="132">Sublime</span><div class="u-flexSpacer" wfd-id="131"></div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 292.362 292.362" class="QFPh3JhPHr52LrFQ2kxNc undefined "><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path></svg></button><ul class="_2hYm9ciHClIn4jNdhK909W  yY5vZ2MbqhOVqmS30XXJL dv76m5e2RM3OJujnzUOBL" style="min-width: 100%;" wfd-id="127"><li data-index="0" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4 _2RweJABdNjr5cvThcEs5v4" wfd-id="130">Sublime</li><li data-index="1" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="129">Emacs</li><li data-index="2" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4" wfd-id="128">Vim</li></ul></div><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      _257YpNJ3jO_Fd_W3lgsSeU
    " type="button" data-tip="Light Theme" data-tip-disable="false" tabindex="0" currentitem="false" wfd-id="235"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="125"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 302.4 302.4" class="EWClPyvLL2D8jXClm1XTw"><path d="M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2z" stroke="currentColor" stroke-width="12"></path><path d="M292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z" stroke="currentColor" stroke-width="5"></path></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="124"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button><div class="u-flexSpacer" wfd-id="123"></div><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      _257YpNJ3jO_Fd_W3lgsSeU
    " type="button" data-tip="Settings" data-tip-disable="false" tabindex="0" currentitem="false" wfd-id="234"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="122"><svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="EWClPyvLL2D8jXClm1XTw"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="121"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button><div class="_1sla2qcaX6jUObS9I6-Mu8" wfd-id="119"><div class="PXhMf3mdYIEKhchSiuas5  -CQ_rxL00SopAjp9767Hb" wfd-id="120"><div class="_14XtsMGqCQIapYL-Ulbxy2"><div class="Qs5LuppzFlIFP2vbr9GCg _1Zmwl_4MTdu6PP2Qbe_YCY" style="min-width: 139px;"><button class="
    _39l6kdsveGLqC-djj_0iWb 
    _3vkg_i2SJV41YIUlAx2S83 
    
    
    _3QkXuGLQ983bgFGACd1weI
  " data-tip="Syntax Highlighting" data-tip-disable="false" type="button" tabindex="-1" currentitem="false" wfd-id="233"><span class="V5FskHRl4WUCiuQR4Zl5g">Monokai</span><div class="u-flexSpacer"></div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 292.362 292.362" class="QFPh3JhPHr52LrFQ2kxNc undefined "><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path></svg></button><ul class="_2hYm9ciHClIn4jNdhK909W  yY5vZ2MbqhOVqmS30XXJL dv76m5e2RM3OJujnzUOBL" style="min-width: 100%;"><li data-index="0" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4">Blackboard</li><li data-index="1" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4">Cobalt</li><li data-index="2" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4">Dracula</li><li data-index="3" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4">Lucario</li><li data-index="4" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4">Midnight</li><li data-index="5" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4 _2RweJABdNjr5cvThcEs5v4">Monokai</li><li data-index="6" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4">Night</li><li data-index="7" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4">Oceanic Next</li><li data-index="8" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4">Rubyblue</li><li data-index="9" class="amaJ53L2vU1L2QxMpXCQ6 _3HSYZ4-Lje-VubI8-k8xP5 _3AGy31vySnfSEwW_Vu04k4">Solarized Dark</li></ul></div><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      _2Xf3elIt5PVVsmheMH77Sy
      
      
      
      
      
      jLfsYfyLWRP5njOxtSPHk
    " type="button" data-tip="Whiteboard Mode" data-tip-disable="false" tabindex="-1" currentitem="false" wfd-id="232"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="EWClPyvLL2D8jXClm1XTw"><path d="M492 17.997H20c-11.046 0-20 8.954-20 20v320c0 11.046 8.954 20 20 20h160.169l-23.532 90.992c-2.766 10.694 3.662 21.605 14.355 24.371 10.741 2.779 21.617-3.709 24.371-14.355l26.123-101.008h69.028l26.123 101.008c2.753 10.643 13.626 17.134 24.371 14.355 10.693-2.766 17.121-13.677 14.355-24.371l-23.532-90.992H492c11.046 0 20-8.954 20-20v-320c0-11.046-8.954-20-20-20zm-20 320H40v-280h432v280z"></path></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  "><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      _2Xf3elIt5PVVsmheMH77Sy
      
      
      
      
      
      jLfsYfyLWRP5njOxtSPHk
    " type="button" data-tip="Data Structure Visualizer" data-tip-disable="false" tabindex="-1" currentitem="false" wfd-id="231"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" fill="currentColor" class="EWClPyvLL2D8jXClm1XTw"><path d="M354.957 116.545c-6.044-10.441-9.507-22.568-9.507-35.509 0-39.213 31.784-70.997 70.997-70.997s70.997 31.784 70.997 70.997-31.784 70.997-70.997 70.997c-26.272.001-49.212-14.275-61.49-35.488zM354.957 395.455c12.278-21.213 35.218-35.489 61.49-35.489 39.213 0 70.997 31.784 70.997 70.997s-31.784 70.997-70.997 70.997-70.997-31.784-70.997-70.997c0-12.94 3.463-25.067 9.507-35.508zM158.098 222.379c5.391 10.009 8.453 21.454 8.453 33.621 0 39.213-31.784 70.997-70.997 70.997S24.556 295.213 24.556 256s31.784-70.997 70.997-70.997c27.046 0 50.558 15.119 62.545 37.376z"></path><path d="M416.447 0c-44.684 0-81.037 36.353-81.037 81.037a81.142 81.142 0 006.261 31.253l-40.115 21.566c-4.883 2.625-6.714 8.713-4.088 13.596a10.04 10.04 0 008.851 5.288 10 10 0 004.746-1.199l40.608-21.831c15.2 20.166 39.222 32.364 64.775 32.364 44.684 0 81.037-36.353 81.037-81.038C497.484 36.353 461.131 0 416.447 0zm0 141.995c-21.689 0-41.921-11.679-52.802-30.479-5.336-9.218-8.157-19.758-8.157-30.479.001-33.613 27.347-60.958 60.959-60.958s60.958 27.345 60.958 60.958-27.344 60.958-60.958 60.958zM416.447 349.927c-25.554 0-49.576 12.199-64.775 32.365l-180.558-97.061a80.583 80.583 0 005.477-29.23 81.387 81.387 0 00-5.449-29.235l83.299-44.783c4.883-2.625 6.714-8.713 4.088-13.596-2.624-4.883-8.713-6.715-13.596-4.088l-83.306 44.787a80.96 80.96 0 00-66.073-34.12c-44.684 0-81.037 36.353-81.037 81.037S50.87 337.04 95.554 337.04c27.215 0 51.32-13.499 66.024-34.137l180.095 96.811a81.146 81.146 0 00-6.261 31.253c0 44.684 36.353 81.037 81.038 81.037 44.684 0 81.037-36.353 81.037-81.037-.003-44.687-36.356-81.04-81.04-81.04zM95.554 316.958c-33.612 0-60.958-27.345-60.958-60.958s27.345-60.958 60.958-60.958c22.465 0 43.043 12.299 53.706 32.096 4.746 8.811 7.253 18.791 7.253 28.862-.001 33.612-27.347 60.958-60.959 60.958zm320.893 174.964c-33.612 0-60.959-27.345-60.959-60.958 0-10.722 2.821-21.262 8.158-30.48 10.881-18.8 31.113-30.478 52.801-30.478 33.612 0 60.958 27.346 60.958 60.959s-27.344 60.957-60.958 60.957zM279.091 147.242c-12.919 0-12.941 20.078 0 20.078 12.919.001 12.94-20.078 0-20.078z"></path></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  "><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button></div></div></div><div class="_1Kt6NJHS9pAZMLNSkpyqYb HYdHOyxum9jKnxl26XLzt" wfd-id="97"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      _1JsZ2N22fK8g2J_ZiafZA-
    " type="button" data-tip="Timer | Stopwatch" data-tip-disable="false" tabindex="0" currentitem="false" wfd-id="230"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="115"><svg fill="currentColor" viewBox="0 0 323.569 323.569" xmlns="http://www.w3.org/2000/svg" class="_15iFZ2Yj-Iq2DnWz3du3tA"><path d="M161.785 53.928c-74.459 0-134.821 60.361-134.821 134.821S87.325 323.57 161.785 323.57s134.821-60.361 134.821-134.821c-.085-74.424-60.397-134.736-134.821-134.821zm13.482 241.74v-12.545c0-7.446-6.036-13.482-13.482-13.482s-13.482 6.036-13.482 13.482v12.538c-48.792-6.221-87.21-44.638-93.431-93.431H67.41c7.446 0 13.482-6.036 13.482-13.482s-6.036-13.482-13.482-13.482H54.872c6.221-48.792 44.638-87.21 93.431-93.431v12.538c0 7.446 6.036 13.482 13.482 13.482s13.482-6.036 13.482-13.482V81.836c48.795 6.218 87.216 44.636 93.437 93.431h-12.545c-7.446 0-13.482 6.036-13.482 13.482s6.036 13.482 13.482 13.482h12.538c-6.217 48.795-44.636 87.216-93.43 93.437z"></path><path d="M175.267 183.166v-34.863c0-7.446-6.036-13.482-13.482-13.482s-13.482 6.036-13.482 13.482v40.446a13.487 13.487 0 003.95 9.532l26.964 26.964c5.356 5.173 13.891 5.024 19.064-.332 5.046-5.225 5.046-13.507 0-18.732zM134.821 26.964h53.928c7.446 0 13.482-6.036 13.482-13.482S196.195 0 188.749 0h-53.928c-7.446 0-13.482 6.036-13.482 13.482s6.036 13.482 13.482 13.482zM314.314 74.348L276.185 36.22c-5.331-5.198-13.867-5.09-19.065.241-5.105 5.236-5.105 13.588 0 18.824l38.129 38.129c5.198 5.331 13.734 5.439 19.065.241s5.439-13.734.241-19.065a10.994 10.994 0 00-.241-.242zM66.449 55.285c5.331-5.198 5.439-13.734.241-19.065s-13.734-5.439-19.065-.241c-.081.079-.162.16-.241.241L9.256 74.348c-5.331 5.198-5.44 13.734-.242 19.065s13.734 5.44 19.065.242c.082-.08.162-.16.242-.242z"></path></svg><div class="_1ijm2QyIB6H75U8Ucxzs07" wfd-id="116"><span wfd-id="118">00:00:00</span> | <span wfd-id="117">00:00:00</span></div></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="114"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button><div class="PHlIFojo0ithUgOJhp4c4 " wfd-id="98"><button class="_2IZ2vkmSoQ8P1aXrkV0VUU" aria-label="Close Close" tabindex="-1" wfd-id="229"></button><div class="HYdHOyxum9jKnxl26XLzt" wfd-id="105"><div wfd-id="112"><h3 class="_26pefc6ILCTIxy5e0L2EJx">Timer</h3><div wfd-id="113"></div></div><div class="_35IKl9Kuzgi0_ci3_Z8avG" wfd-id="111">00:00:00</div><form wfd-id="106"><label for="minutes" class="sxpyegU7S6aQPim1psRd7" wfd-id="110">Minutes</label><div class="_20_BfbSQeyLIMX4QK_QRzH _1oNkVASu0ePTw8eNAlVh6a" wfd-id="108"><input id="minutes" class="_1qEAKl0o1R-_LnepL3bTWU _3YjCQOSR2DRx99l6E9a8Zs" type="number" maxlength="3" min="1" tabindex="-1" value="45" wfd-id="204"><div class="_2gRZ-lVqDCLJNdCjlJN_-F" wfd-id="109"></div></div><div class="vkN5nXk-C5IVO8OvZ0NTp" wfd-id="107"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1P1bxvGlBd5ZZSQpEP3jU6
      _3CN_AXY57wWl_TqwlhrJGA
      
      
      _10oIXTTgmWKJQ5nnG9zXuL
      
      
      _3Ln6qE61KEZPJzPaSCbvVA
    " type="submit" data-tip-disable="false" tabindex="-1" wfd-id="228"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.148 494.148" fill="currentColor" class="_3POBbRyYGv-ZlmdEFW904l "><path d="M405.284 201.188L130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" fill="currentColor" class="_3POBbRyYGv-ZlmdEFW904l Ah4fe8ckxeHE5fuTMcVxx"><path d="M80 0H48C30.305 0 16 14.305 16 32v224c0 17.695 14.305 32 32 32h32c17.695 0 32-14.305 32-32V32c0-17.695-14.305-32-32-32zM240 0h-32c-17.695 0-32 14.305-32 32v224c0 17.695 14.305 32 32 32h32c17.695 0 32-14.305 32-32V32c0-17.695-14.305-32-32-32z"></path></svg>Start</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  "><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1P1bxvGlBd5ZZSQpEP3jU6
      _1gyKW0NvxYTr8QvZTctSls
      _1m7yV9vSq8OF2Lqb7lz3zj
      
      _10oIXTTgmWKJQ5nnG9zXuL
      
      
      _3Ln6qE61KEZPJzPaSCbvVA
    " disabled="" type="button" data-tip-disable="false" tabindex="-1" wfd-id="227"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  "><svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="_3POBbRyYGv-ZlmdEFW904l"><path d="M256 106.668c-11.797 0-21.332 9.555-21.332 21.332v128c0 11.777 9.535 21.332 21.332 21.332h128c11.797 0 21.332-9.555 21.332-21.332s-9.535-21.332-21.332-21.332H277.332V128c0-11.777-9.535-21.332-21.332-21.332zm0 0"></path><path d="M256 0C188.16 0 122.453 27.094 73.645 72.34L27.309 26.027a15.98 15.98 0 00-17.43-3.476A16.01 16.01 0 000 37.332V176c0 8.832 7.168 16 16 16h138.668a15.987 15.987 0 0014.781-9.879 15.972 15.972 0 00-3.476-17.43L104 102.7c40.852-37.418 95.445-60.031 152-60.031 117.633 0 213.332 95.7 213.332 213.332S373.632 469.332 256 469.332c-57.047 0-110.57-22.227-150.7-62.547-8.32-8.363-21.843-8.387-30.163-.066-8.364 8.32-8.407 21.824-.086 30.187C123.266 485.332 187.52 512 256 512c141.164 0 256-114.836 256-256S397.164 0 256 0zm0 0"></path></svg>Reset</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  "><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button></div></form></div><div class="_3_VQkn4hmctjBlsS6l4fgn" wfd-id="104"></div><div class="HYdHOyxum9jKnxl26XLzt" wfd-id="99"><div wfd-id="102"><h3 class="_26pefc6ILCTIxy5e0L2EJx">Stopwatch</h3><div wfd-id="103"></div></div><div class="_35IKl9Kuzgi0_ci3_Z8avG" wfd-id="101">00:00:00</div><div class="vkN5nXk-C5IVO8OvZ0NTp" wfd-id="100"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1P1bxvGlBd5ZZSQpEP3jU6
      _3CN_AXY57wWl_TqwlhrJGA
      
      
      _10oIXTTgmWKJQ5nnG9zXuL
      
      
      _3Ln6qE61KEZPJzPaSCbvVA
    " type="button" data-tip-disable="false" tabindex="-1" wfd-id="226"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" fill="currentColor" class="_3POBbRyYGv-ZlmdEFW904l Ah4fe8ckxeHE5fuTMcVxx"><path d="M80 0H48C30.305 0 16 14.305 16 32v224c0 17.695 14.305 32 32 32h32c17.695 0 32-14.305 32-32V32c0-17.695-14.305-32-32-32zM240 0h-32c-17.695 0-32 14.305-32 32v224c0 17.695 14.305 32 32 32h32c17.695 0 32-14.305 32-32V32c0-17.695-14.305-32-32-32z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.148 494.148" fill="currentColor" class="_3POBbRyYGv-ZlmdEFW904l "><path d="M405.284 201.188L130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z"></path></svg>Start</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  "><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1P1bxvGlBd5ZZSQpEP3jU6
      _1gyKW0NvxYTr8QvZTctSls
      _1m7yV9vSq8OF2Lqb7lz3zj
      
      _10oIXTTgmWKJQ5nnG9zXuL
      
      
      _3Ln6qE61KEZPJzPaSCbvVA
    " disabled="" type="button" data-tip-disable="false" tabindex="-1" wfd-id="225"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  "><svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="_3POBbRyYGv-ZlmdEFW904l"><path d="M256 106.668c-11.797 0-21.332 9.555-21.332 21.332v128c0 11.777 9.535 21.332 21.332 21.332h128c11.797 0 21.332-9.555 21.332-21.332s-9.535-21.332-21.332-21.332H277.332V128c0-11.777-9.535-21.332-21.332-21.332zm0 0"></path><path d="M256 0C188.16 0 122.453 27.094 73.645 72.34L27.309 26.027a15.98 15.98 0 00-17.43-3.476A16.01 16.01 0 000 37.332V176c0 8.832 7.168 16 16 16h138.668a15.987 15.987 0 0014.781-9.879 15.972 15.972 0 00-3.476-17.43L104 102.7c40.852-37.418 95.445-60.031 152-60.031 117.633 0 213.332 95.7 213.332 213.332S373.632 469.332 256 469.332c-57.047 0-110.57-22.227-150.7-62.547-8.32-8.363-21.843-8.387-30.163-.066-8.364 8.32-8.407 21.824-.086 30.187C123.266 485.332 187.52 512 256 512c141.164 0 256-114.836 256-256S397.164 0 256 0zm0 0"></path></svg>Reset</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  "><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button></div></div></div></div><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      _257YpNJ3jO_Fd_W3lgsSeU p-UqsY7sYfVJlldZNwJR2
    " type="button" data-tip="Bug Report" data-tip-disable="false" tabindex="0" currentitem="false" wfd-id="224"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="96"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 98.023 98.023" class="EWClPyvLL2D8jXClm1XTw"><path d="M49.011 8.689c-9.983 0-18.541 6.61-22.158 16.012h44.315C67.553 15.3 58.994 8.689 49.011 8.689z"></path><path d="M93.357 48.938H79.496a47.421 47.421 0 001.348-9.83c4.94-2.967 10.617-8.168 12.028-16.795a4.665 4.665 0 00-9.209-1.506c-.759 4.64-3.723 7.724-6.633 9.696H21.009c-2.915-1.974-5.892-5.058-6.65-9.696a4.664 4.664 0 00-5.357-3.851 4.665 4.665 0 00-3.852 5.357c1.411 8.626 7.087 13.828 12.028 16.795a47.354 47.354 0 001.348 9.83H4.665a4.666 4.666 0 000 9.332h17.322a39.081 39.081 0 004.602 7.083c-6.1 4.571-11.813 12.548-14.584 16.745a4.665 4.665 0 007.785 5.144c4.624-6.99 10.586-13.596 13.746-15.472 3.796 2.601 8.073 4.261 12.622 4.759V41.297h5.708v35.232c4.543-.498 8.813-2.153 12.608-4.748 3.195 1.89 9.146 8.483 13.76 15.461a4.665 4.665 0 007.784-5.144c-2.774-4.2-8.473-12.184-14.579-16.751a39.13 39.13 0 004.596-7.077h17.322a4.666 4.666 0 000-9.332z"></path></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="95"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button></div><div class="_39Wha7D3g1zlb5dth4a5Fn" wfd-id="3"><div class="vertical reflex-container" wfd-id="4"><div class="vertical reflex-element" style="flex: 0.5 1 0%;" wfd-id="43"><div class="horizontal reflex-container" wfd-id="44"><div class="horizontal reflex-element" style="flex: 0.65 1 0%;" wfd-id="65"><div class="_2XJ6jIujHvigLRHtOkz4fg " wfd-id="66"><div class="F1JFkhqUR0570-SOdUuLL" wfd-id="82"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      Pt0-DKdojEUQjnL7uRpnv
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      d73Sb1fbAoLgw71N6HrMd
      
      
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="223"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="93">Prompt</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="92"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      Pt0-DKdojEUQjnL7uRpnv
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="222"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="91">Scratchpad</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="90"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button><div data-tip="" wfd-id="87" currentitem="false"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      Pt0-DKdojEUQjnL7uRpnv
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="221"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="89">Our Solution(s)</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="88"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button></div><div data-tip="" wfd-id="84" currentitem="false"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      Pt0-DKdojEUQjnL7uRpnv
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="220"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="86">Video Explanation</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="85"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button></div><div class="_2zIA85b7a-efFN-uLh36zI " wfd-id="83"></div></div><div class="_3t8NG61nHESOP1qu7oV8iT" wfd-id="67"><div class="_3E0jIuryFh6Tdub4CIzq4R _-9XmY6KTbXkFVDX8vmSh6" wfd-id="81"><div class="CodeMirror cm-s-monokai CodeMirror-overlayscroll" style="width: 100%; height: 100%; font-size: 14px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" disabled="" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" wfd-id="816"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true"><div></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; min-width: 3px;"><div style="position: relative;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"><pre class="CodeMirror-line" role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// Copyright © 2021 AlgoExpert LLC. All rights reserved.</span></span></pre></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"></div><div class="CodeMirror-code" role="presentation"></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px;"></div><div class="CodeMirror-gutters" style="left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 1px;"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div></div><div class="_3E0jIuryFh6Tdub4CIzq4R _-9XmY6KTbXkFVDX8vmSh6" wfd-id="80"><div class="CodeMirror cm-s-monokai CodeMirror-overlayscroll" style="width: 100%; height: 100%; font-size: 14px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" wfd-id="815"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true"><div></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; min-width: 3px;"><div style="position: relative;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"><pre class="CodeMirror-line" role="presentation"><span role="presentation" style="padding-right: 0.1px;">Write whatever you want here.</span></pre></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"></div><div class="CodeMirror-code" role="presentation"></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px;"></div><div class="CodeMirror-gutters" style="left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 1px;"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div></div><div class="_1aWQfGqRZ5W0n45sRnzA4N  " wfd-id="69"><div class="_1-ioPm4Fvc_wJB9qPf6w6C" wfd-id="70"><div class="_1AQYwWTRrR5D5yePhtRblW" wfd-id="73"><div class="_3ofsZbOFbxIeQT0YuvxUEl" wfd-id="77"><span class="_3geoVgjjBkfAvmsu_0iEYJ" wfd-id="79">Difficulty: </span><span class="
  _3n3-4r4kri345NtLxT7KNV
  _3RwgBjc4KfsZjzETFt4GPN" data-tip="Easy" wfd-id="78" currentitem="false"></span></div><div class="_3ofsZbOFbxIeQT0YuvxUEl" wfd-id="74"><span class="_3geoVgjjBkfAvmsu_0iEYJ" wfd-id="76">Category: </span><span class="_1Z67dTlk5y-7QrRzsORbUu" data-tip="Hidden" wfd-id="75" currentitem="false">Hidden</span></div><div class="_3ofsZbOFbxIeQT0YuvxUEl" wfd-id="806"><span class="_3geoVgjjBkfAvmsu_0iEYJ" wfd-id="808">Successful Submissions: </span><span class="" wfd-id="807">56,495+</span></div></div><h2 class="_7c9Xd7SD532Lez9esJhVX">Two Number Sum<div class="_26jR6AW2XmDGUjI6SzzyT4 _2M234ebIsg8wgvg2rVXrx3" data-tip="All Tests Passed" wfd-id="72" currentitem="false"></div><svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="_2bMwrm15W_TE6DAFGbeTJ-"><path d="M12.821 16a.5.5 0 01-.203-.043L8 13.901l-4.618 2.056a.501.501 0 01-.694-.556L3.707 10.3.147 6.732a.502.502 0 01.255-.845l5.103-1.023L7.543.272c.16-.362.753-.362.914 0l2.037 4.592 5.104 1.023a.5.5 0 01.255.845l-3.56 3.567L13.31 15.4a.5.5 0 01-.49.6zM8 12.852c.069 0 .138.015.203.043l3.938 1.754-.882-4.417a.502.502 0 01.137-.452l3.09-3.094-4.441-.89a.5.5 0 01-.36-.288L8 1.708l-1.686 3.8a.5.5 0 01-.36.288l-4.44.89 3.09 3.094c.117.118.169.288.136.452l-.882 4.417 3.939-1.754A.497.497 0 018 12.852z"></path></svg></h2><div class="_2Z1QnqTcQRifY9j8GvbCr8" wfd-id="71"><p>
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
</p>
<p>
  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.
</p>
<p>
  You can assume that there will be at most one pair of numbers summing up to
  the target sum.
</p>
<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter" wfd-id="805">array</span> = [3, 5, -4, 8, 11, 1, -1, 6]
<span class="CodeEditor-promptParameter" wfd-id="804">targetSum</span> = 10
</pre>
<h3>Sample Output</h3>
<pre>[-1, 11] <span class="CodeEditor-promptComment" wfd-id="803">// the numbers could be in reverse order</span>
</pre></div><div class="i_9zIMYnPpU3Ytkl8T2R7" wfd-id="782"><h3 class="klUO7Mz36GoQpV7OLZXXl">Hints</h3><div class="_3MGOzh6CTxV-pXim21iR66" wfd-id="798"><div class="
      EGA5hB1SfCvXrmbRa0dVL
      _2nbF4q9SPAXJThw4ZeGGTx
      _3vcKhT4euByWZhicb2XWgr
      
      " tabindex="0" wfd-id="799"><div class="
      _2VETeTVuVEIZz8hft8XmYx
      undefined
      _1RI3M0NXLh8Z4YCXAfK1NX
      " wfd-id="801"><div class="_1NVSPYP3hBJSyQIQThJcVr" wfd-id="802">Hint 1</div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 292.362 292.362" class="ziG9cplWruSO34u3rlTHj "><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path></svg></div><div class="_3eVBLPRkiVIcsNJFJ-3urG" wfd-id="800"><div class="_2uaA-tUdCiVqJRNjXDpITG"><p class="_3pAwmWjFEZ914S4ilA1cDQ">Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?</p></div></div></div></div><div class="_3MGOzh6CTxV-pXim21iR66" wfd-id="793"><div class="
      EGA5hB1SfCvXrmbRa0dVL
      _2nbF4q9SPAXJThw4ZeGGTx
      _3vcKhT4euByWZhicb2XWgr
      
      " tabindex="0" wfd-id="794"><div class="
      _2VETeTVuVEIZz8hft8XmYx
      undefined
      _1RI3M0NXLh8Z4YCXAfK1NX
      " wfd-id="796"><div class="_1NVSPYP3hBJSyQIQThJcVr" wfd-id="797">Hint 2</div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 292.362 292.362" class="ziG9cplWruSO34u3rlTHj "><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path></svg></div><div class="_3eVBLPRkiVIcsNJFJ-3urG" wfd-id="795"><div class="_2uaA-tUdCiVqJRNjXDpITG"><p class="_3pAwmWjFEZ914S4ilA1cDQ">Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.</p></div></div></div></div><div class="_3MGOzh6CTxV-pXim21iR66" wfd-id="788"><div class="
      EGA5hB1SfCvXrmbRa0dVL
      _2nbF4q9SPAXJThw4ZeGGTx
      _3vcKhT4euByWZhicb2XWgr
      
      " tabindex="0" wfd-id="789"><div class="
      _2VETeTVuVEIZz8hft8XmYx
      undefined
      _1RI3M0NXLh8Z4YCXAfK1NX
      " wfd-id="791"><div class="_1NVSPYP3hBJSyQIQThJcVr" wfd-id="792">Hint 3</div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 292.362 292.362" class="ziG9cplWruSO34u3rlTHj "><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path></svg></div><div class="_3eVBLPRkiVIcsNJFJ-3urG" wfd-id="790"><div class="_2uaA-tUdCiVqJRNjXDpITG"><p class="_3pAwmWjFEZ914S4ilA1cDQ">Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash table. What are the time and space implications of this approach?</p></div></div></div></div><div class="_3MGOzh6CTxV-pXim21iR66" wfd-id="783"><div class="
      EGA5hB1SfCvXrmbRa0dVL
      _2nbF4q9SPAXJThw4ZeGGTx
      _3vcKhT4euByWZhicb2XWgr
      
      " tabindex="0" wfd-id="784"><div class="
      _2VETeTVuVEIZz8hft8XmYx
      undefined
      _1RI3M0NXLh8Z4YCXAfK1NX
      " wfd-id="786"><div class="_1NVSPYP3hBJSyQIQThJcVr" wfd-id="787">Optimal Space &amp; Time Complexity</div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 292.362 292.362" class="ziG9cplWruSO34u3rlTHj "><path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"></path></svg></div><div class="_3eVBLPRkiVIcsNJFJ-3urG" wfd-id="785"><div class="_2uaA-tUdCiVqJRNjXDpITG"><p class="_3pAwmWjFEZ914S4ilA1cDQ">O(n) time | O(n) space - where n is the length of the input array</p></div></div></div></div></div></div></div><div class="_2W1L14iOwGCHBaBtrZjpdi _-9XmY6KTbXkFVDX8vmSh6" wfd-id="68"><div class="_3L-rDRHX48nYyLTvxWqUHo"><p class="
        _7YBGHdKFC47uLT2nebFIE
        Jx92_FrVUSyS7pGO6XSTQ
        _2Zbe48FGB-Jwe2NBhszJ5E
        _11evgMqqYP8hxqTxzy9TVZ
        _23Q8b3Z04QaZwYGwu_QVzH
        i_AZlMqs22xtqc_Jqje34
    "><img src="./twoNumberSum_files/clement-small.noinline.jpg" class="_22U-qLU2N1ErsDtweUJ8hs" alt=""><b>Instructor</b>: Clément Mihailescu</p><div class="_16w8-Y4FGoQtT7iX4KByX0" id="js-video-wrapper" data-vimeo-initialized="true"><iframe src="./twoNumberSum_files/229483089.html" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="Two Number Sum" data-ready="true"></iframe></div><div class="LAyNG1D_SN2_PGjV7izJF"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      _2_o28Gmv1eujhEjVpbYOQ0
      
      
      
      
      
      xpzdaAJ7jpEpgd1Q9yyeG
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="818"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  ">Go to Conceptual Overview</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  "><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      _2_o28Gmv1eujhEjVpbYOQ0
      
      
      
      
      
      xpzdaAJ7jpEpgd1Q9yyeG
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="817"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  ">Go to Code Walkthrough</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  "><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" currentitem="false" style="height: 25px; width: 25px; border-color: white transparent;"></div></div></button></div></div></div></div></div></div><div class="_2KU2Q3t0eehftuvMIH1rvq lzB3v1OXr9A743VV9WBkt undefined  reflex-splitter" wfd-id="64"></div><div class="horizontal reflex-element" style="flex: 0.35 1 0%;" wfd-id="45"><div class="_2XJ6jIujHvigLRHtOkz4fg" wfd-id="46"><div class="F1JFkhqUR0570-SOdUuLL" wfd-id="51"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      Pt0-DKdojEUQjnL7uRpnv
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      d73Sb1fbAoLgw71N6HrMd
      
      
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="219"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="63">Tests</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="62"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button><span data-tip="Quick Test isn&#39;t available &lt;br /&gt; for JavaScript yet" data-tip-disable="true" wfd-id="59" currentitem="false"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      Pt0-DKdojEUQjnL7uRpnv
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="218"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="61">Quick Test</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="60"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button></span><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      Pt0-DKdojEUQjnL7uRpnv
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="217"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="58">Sandbox</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="57"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button><div class="_2zIA85b7a-efFN-uLh36zI" wfd-id="52"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      _2ssALYD2i6qKLw6AG0N3vn
    " type="button" data-tip="Show" data-tip-disable="false" tabindex="0" wfd-id="216" currentitem="false"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="56"><svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="_1YnaVJJrwEeabvskepv3XL"><path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 010-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 010 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" stroke="currentColor" stroke-width="3"></path></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="55"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      _2ssALYD2i6qKLw6AG0N3vn
    " type="button" data-tip="More Info" data-tip-disable="false" tabindex="0" wfd-id="215" currentitem="false"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="54"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" fill="currentColor" class="v4-o6UwwRQ2O9UWdRW52M"><path d="M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z"></path><path d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z"></path></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="53"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button></div></div><div class="_3t8NG61nHESOP1qu7oV8iT _3Le4QYJ-wuvIfOmfTTwDkN" wfd-id="47"><div class="_3E0jIuryFh6Tdub4CIzq4R _-9XmY6KTbXkFVDX8vmSh6" wfd-id="50"><div class="CodeMirror cm-s-monokai CodeMirror-overlayscroll" style="width: 100%; height: 100%; font-size: 14px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" wfd-id="814"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true"><div></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; min-width: 3px;"><div style="position: relative;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"><pre class="CodeMirror-line" role="presentation"><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-keyword">const</span> <span class="cm-def">output</span> <span class="cm-operator">=</span> <span class="cm-variable">program</span>.<span class="cm-property">twoNumberSum</span>([<span class="cm-number">3</span>, <span class="cm-number">5</span>, <span class="cm-operator">-</span><span class="cm-number">4</span>, <span class="cm-number">8</span>, <span class="cm-number">11</span>, <span class="cm-number">1</span>, <span class="cm-operator">-</span><span class="cm-number">1</span>, <span class="cm-number">6</span>], <span class="cm-number">10</span>);</span></pre></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"></div><div class="CodeMirror-code" role="presentation"></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px;"></div><div class="CodeMirror-gutters" style="left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 1px;"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div></div><div class="_1LYpoj3S9weYIrpnzbc3mQ _-9XmY6KTbXkFVDX8vmSh6 QuickTest-CmWrapper" wfd-id="49"><div class="_3GE0_4L7JKbHExIgX4tj9K"><span class="QneCZv8dvwEnvB0TTHwxL">array</span><div class="_1QSkUb7ZMT1pvZobMts-7-"><div class="CodeMirror cm-s-monokai CodeMirror-overlayscroll" style="width: 100%; height: 100%; font-size: 14px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" wfd-id="813"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true"><div></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; min-width: 3px;"><div style="position: relative;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"><pre class="CodeMirror-line" role="presentation"><span role="presentation" style="padding-right: 0.1px;">[<span class="cm-number">3</span>, <span class="cm-number">5</span>, <span class="cm-operator">-</span><span class="cm-number">4</span>, <span class="cm-number">8</span>, <span class="cm-number">11</span>, <span class="cm-number">1</span>, <span class="cm-operator">-</span><span class="cm-number">1</span>, <span class="cm-number">6</span>]</span></pre></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"></div><div class="CodeMirror-code" role="presentation"></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px;"></div><div class="CodeMirror-gutters" style="left: 0px;"><div class="CodeMirror-gutter CodeMirror-lint-markers"></div><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 1px;"></div></div></div></div></div><span class="QneCZv8dvwEnvB0TTHwxL">targetSum</span><div class="_1QSkUb7ZMT1pvZobMts-7-"><div class="CodeMirror cm-s-monokai CodeMirror-overlayscroll" style="width: 100%; height: 100%; font-size: 14px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" wfd-id="812"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true"><div></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; min-width: 3px;"><div style="position: relative;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"><pre class="CodeMirror-line" role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-number">10</span></span></pre></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"></div><div class="CodeMirror-code" role="presentation"></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px;"></div><div class="CodeMirror-gutters" style="left: 0px;"><div class="CodeMirror-gutter CodeMirror-lint-markers"></div><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 1px;"></div></div></div></div></div></div></div><div class="_1rbIALK91weRWJmtic4afp  dark" wfd-id="48"><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="752"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="753"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="781">Test Case 1<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="780">{</span><span class="token property" wfd-id="779">"array"</span><span class="token operator" wfd-id="778">:</span> <span class="token punctuation" wfd-id="777">[</span><span class="token number" wfd-id="776">3</span><span class="token punctuation" wfd-id="775">,</span> <span class="token number" wfd-id="774">5</span><span class="token punctuation" wfd-id="773">,</span> <span class="token number" wfd-id="772">-4</span><span class="token punctuation" wfd-id="771">,</span> <span class="token number" wfd-id="770">8</span><span class="token punctuation" wfd-id="769">,</span> <span class="token number" wfd-id="768">11</span><span class="token punctuation" wfd-id="767">,</span> <span class="token number" wfd-id="766">1</span><span class="token punctuation" wfd-id="765">,</span> <span class="token number" wfd-id="764">-1</span><span class="token punctuation" wfd-id="763">,</span> <span class="token number" wfd-id="762">6</span><span class="token punctuation" wfd-id="761">]</span><span class="token punctuation" wfd-id="760">,</span> <span class="token property" wfd-id="759">"targetSum"</span><span class="token operator" wfd-id="758">:</span> <span class="token number" wfd-id="757">10</span><span class="token punctuation" wfd-id="756">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="754"><span wfd-id="755"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="734"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="735"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="751">Test Case 2<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="750">{</span><span class="token property" wfd-id="749">"array"</span><span class="token operator" wfd-id="748">:</span> <span class="token punctuation" wfd-id="747">[</span><span class="token number" wfd-id="746">4</span><span class="token punctuation" wfd-id="745">,</span> <span class="token number" wfd-id="744">6</span><span class="token punctuation" wfd-id="743">]</span><span class="token punctuation" wfd-id="742">,</span> <span class="token property" wfd-id="741">"targetSum"</span><span class="token operator" wfd-id="740">:</span> <span class="token number" wfd-id="739">10</span><span class="token punctuation" wfd-id="738">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="736"><span wfd-id="737"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="714"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="715"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="733">Test Case 3<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="732">{</span><span class="token property" wfd-id="731">"array"</span><span class="token operator" wfd-id="730">:</span> <span class="token punctuation" wfd-id="729">[</span><span class="token number" wfd-id="728">4</span><span class="token punctuation" wfd-id="727">,</span> <span class="token number" wfd-id="726">6</span><span class="token punctuation" wfd-id="725">,</span> <span class="token number" wfd-id="724">1</span><span class="token punctuation" wfd-id="723">]</span><span class="token punctuation" wfd-id="722">,</span> <span class="token property" wfd-id="721">"targetSum"</span><span class="token operator" wfd-id="720">:</span> <span class="token number" wfd-id="719">5</span><span class="token punctuation" wfd-id="718">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="716"><span wfd-id="717"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="692"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="693"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="713">Test Case 4<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="712">{</span><span class="token property" wfd-id="711">"array"</span><span class="token operator" wfd-id="710">:</span> <span class="token punctuation" wfd-id="709">[</span><span class="token number" wfd-id="708">4</span><span class="token punctuation" wfd-id="707">,</span> <span class="token number" wfd-id="706">6</span><span class="token punctuation" wfd-id="705">,</span> <span class="token number" wfd-id="704">1</span><span class="token punctuation" wfd-id="703">,</span> <span class="token number" wfd-id="702">-3</span><span class="token punctuation" wfd-id="701">]</span><span class="token punctuation" wfd-id="700">,</span> <span class="token property" wfd-id="699">"targetSum"</span><span class="token operator" wfd-id="698">:</span> <span class="token number" wfd-id="697">3</span><span class="token punctuation" wfd-id="696">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="694"><span wfd-id="695"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="660"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="661"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="691">Test Case 5<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="690">{</span><span class="token property" wfd-id="689">"array"</span><span class="token operator" wfd-id="688">:</span> <span class="token punctuation" wfd-id="687">[</span><span class="token number" wfd-id="686">1</span><span class="token punctuation" wfd-id="685">,</span> <span class="token number" wfd-id="684">2</span><span class="token punctuation" wfd-id="683">,</span> <span class="token number" wfd-id="682">3</span><span class="token punctuation" wfd-id="681">,</span> <span class="token number" wfd-id="680">4</span><span class="token punctuation" wfd-id="679">,</span> <span class="token number" wfd-id="678">5</span><span class="token punctuation" wfd-id="677">,</span> <span class="token number" wfd-id="676">6</span><span class="token punctuation" wfd-id="675">,</span> <span class="token number" wfd-id="674">7</span><span class="token punctuation" wfd-id="673">,</span> <span class="token number" wfd-id="672">8</span><span class="token punctuation" wfd-id="671">,</span> <span class="token number" wfd-id="670">9</span><span class="token punctuation" wfd-id="669">]</span><span class="token punctuation" wfd-id="668">,</span> <span class="token property" wfd-id="667">"targetSum"</span><span class="token operator" wfd-id="666">:</span> <span class="token number" wfd-id="665">17</span><span class="token punctuation" wfd-id="664">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="662"><span wfd-id="663"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="626"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="627"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="659">Test Case 6<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="658">{</span><span class="token property" wfd-id="657">"array"</span><span class="token operator" wfd-id="656">:</span> <span class="token punctuation" wfd-id="655">[</span><span class="token number" wfd-id="654">1</span><span class="token punctuation" wfd-id="653">,</span> <span class="token number" wfd-id="652">2</span><span class="token punctuation" wfd-id="651">,</span> <span class="token number" wfd-id="650">3</span><span class="token punctuation" wfd-id="649">,</span> <span class="token number" wfd-id="648">4</span><span class="token punctuation" wfd-id="647">,</span> <span class="token number" wfd-id="646">5</span><span class="token punctuation" wfd-id="645">,</span> <span class="token number" wfd-id="644">6</span><span class="token punctuation" wfd-id="643">,</span> <span class="token number" wfd-id="642">7</span><span class="token punctuation" wfd-id="641">,</span> <span class="token number" wfd-id="640">8</span><span class="token punctuation" wfd-id="639">,</span> <span class="token number" wfd-id="638">9</span><span class="token punctuation" wfd-id="637">,</span> <span class="token number" wfd-id="636">15</span><span class="token punctuation" wfd-id="635">]</span><span class="token punctuation" wfd-id="634">,</span> <span class="token property" wfd-id="633">"targetSum"</span><span class="token operator" wfd-id="632">:</span> <span class="token number" wfd-id="631">18</span><span class="token punctuation" wfd-id="630">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="628"><span wfd-id="629"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="594"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="595"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="625">Test Case 7<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="624">{</span><span class="token property" wfd-id="623">"array"</span><span class="token operator" wfd-id="622">:</span> <span class="token punctuation" wfd-id="621">[</span><span class="token number" wfd-id="620">-7</span><span class="token punctuation" wfd-id="619">,</span> <span class="token number" wfd-id="618">-5</span><span class="token punctuation" wfd-id="617">,</span> <span class="token number" wfd-id="616">-3</span><span class="token punctuation" wfd-id="615">,</span> <span class="token number" wfd-id="614">-1</span><span class="token punctuation" wfd-id="613">,</span> <span class="token number" wfd-id="612">0</span><span class="token punctuation" wfd-id="611">,</span> <span class="token number" wfd-id="610">1</span><span class="token punctuation" wfd-id="609">,</span> <span class="token number" wfd-id="608">3</span><span class="token punctuation" wfd-id="607">,</span> <span class="token number" wfd-id="606">5</span><span class="token punctuation" wfd-id="605">,</span> <span class="token number" wfd-id="604">7</span><span class="token punctuation" wfd-id="603">]</span><span class="token punctuation" wfd-id="602">,</span> <span class="token property" wfd-id="601">"targetSum"</span><span class="token operator" wfd-id="600">:</span> <span class="token number" wfd-id="599">-5</span><span class="token punctuation" wfd-id="598">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="596"><span wfd-id="597"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="560"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="561"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="593">Test Case 8<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="592">{</span><span class="token property" wfd-id="591">"array"</span><span class="token operator" wfd-id="590">:</span> <span class="token punctuation" wfd-id="589">[</span><span class="token number" wfd-id="588">-21</span><span class="token punctuation" wfd-id="587">,</span> <span class="token number" wfd-id="586">301</span><span class="token punctuation" wfd-id="585">,</span> <span class="token number" wfd-id="584">12</span><span class="token punctuation" wfd-id="583">,</span> <span class="token number" wfd-id="582">4</span><span class="token punctuation" wfd-id="581">,</span> <span class="token number" wfd-id="580">65</span><span class="token punctuation" wfd-id="579">,</span> <span class="token number" wfd-id="578">56</span><span class="token punctuation" wfd-id="577">,</span> <span class="token number" wfd-id="576">210</span><span class="token punctuation" wfd-id="575">,</span> <span class="token number" wfd-id="574">356</span><span class="token punctuation" wfd-id="573">,</span> <span class="token number" wfd-id="572">9</span><span class="token punctuation" wfd-id="571">,</span> <span class="token number" wfd-id="570">-47</span><span class="token punctuation" wfd-id="569">]</span><span class="token punctuation" wfd-id="568">,</span> <span class="token property" wfd-id="567">"targetSum"</span><span class="token operator" wfd-id="566">:</span> <span class="token number" wfd-id="565">163</span><span class="token punctuation" wfd-id="564">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="562"><span wfd-id="563"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="526"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="527"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="559">Test Case 9<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="558">{</span><span class="token property" wfd-id="557">"array"</span><span class="token operator" wfd-id="556">:</span> <span class="token punctuation" wfd-id="555">[</span><span class="token number" wfd-id="554">-21</span><span class="token punctuation" wfd-id="553">,</span> <span class="token number" wfd-id="552">301</span><span class="token punctuation" wfd-id="551">,</span> <span class="token number" wfd-id="550">12</span><span class="token punctuation" wfd-id="549">,</span> <span class="token number" wfd-id="548">4</span><span class="token punctuation" wfd-id="547">,</span> <span class="token number" wfd-id="546">65</span><span class="token punctuation" wfd-id="545">,</span> <span class="token number" wfd-id="544">56</span><span class="token punctuation" wfd-id="543">,</span> <span class="token number" wfd-id="542">210</span><span class="token punctuation" wfd-id="541">,</span> <span class="token number" wfd-id="540">356</span><span class="token punctuation" wfd-id="539">,</span> <span class="token number" wfd-id="538">9</span><span class="token punctuation" wfd-id="537">,</span> <span class="token number" wfd-id="536">-47</span><span class="token punctuation" wfd-id="535">]</span><span class="token punctuation" wfd-id="534">,</span> <span class="token property" wfd-id="533">"targetSum"</span><span class="token operator" wfd-id="532">:</span> <span class="token number" wfd-id="531">164</span><span class="token punctuation" wfd-id="530">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="528"><span wfd-id="529"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="496"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="497"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="525">Test Case 10<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="524">{</span><span class="token property" wfd-id="523">"array"</span><span class="token operator" wfd-id="522">:</span> <span class="token punctuation" wfd-id="521">[</span><span class="token number" wfd-id="520">3</span><span class="token punctuation" wfd-id="519">,</span> <span class="token number" wfd-id="518">5</span><span class="token punctuation" wfd-id="517">,</span> <span class="token number" wfd-id="516">-4</span><span class="token punctuation" wfd-id="515">,</span> <span class="token number" wfd-id="514">8</span><span class="token punctuation" wfd-id="513">,</span> <span class="token number" wfd-id="512">11</span><span class="token punctuation" wfd-id="511">,</span> <span class="token number" wfd-id="510">1</span><span class="token punctuation" wfd-id="509">,</span> <span class="token number" wfd-id="508">-1</span><span class="token punctuation" wfd-id="507">,</span> <span class="token number" wfd-id="506">6</span><span class="token punctuation" wfd-id="505">]</span><span class="token punctuation" wfd-id="504">,</span> <span class="token property" wfd-id="503">"targetSum"</span><span class="token operator" wfd-id="502">:</span> <span class="token number" wfd-id="501">15</span><span class="token punctuation" wfd-id="500">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="498"><span wfd-id="499"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="480"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="481"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="495">Test Case 11<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="494">{</span><span class="token property" wfd-id="493">"array"</span><span class="token operator" wfd-id="492">:</span> <span class="token punctuation" wfd-id="491">[</span><span class="token number" wfd-id="490">14</span><span class="token punctuation" wfd-id="489">]</span><span class="token punctuation" wfd-id="488">,</span> <span class="token property" wfd-id="487">"targetSum"</span><span class="token operator" wfd-id="486">:</span> <span class="token number" wfd-id="485">15</span><span class="token punctuation" wfd-id="484">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="482"><span wfd-id="483"></span></span></code></pre></div></div><div class="_1CpZrk4PQ3p9TBkPNV54i6" wfd-id="464"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark" wfd-id="465"><span class="mGA3QqPB7uQ-Bt6P-D73u" wfd-id="479">Test Case 12<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation" wfd-id="478">{</span><span class="token property" wfd-id="477">"array"</span><span class="token operator" wfd-id="476">:</span> <span class="token punctuation" wfd-id="475">[</span><span class="token number" wfd-id="474">15</span><span class="token punctuation" wfd-id="473">]</span><span class="token punctuation" wfd-id="472">,</span> <span class="token property" wfd-id="471">"targetSum"</span><span class="token operator" wfd-id="470">:</span> <span class="token number" wfd-id="469">15</span><span class="token punctuation" wfd-id="468">}</span><span aria-hidden="true" class="line-numbers-rows" wfd-id="466"><span wfd-id="467"></span></span></code></pre></div></div></div></div></div></div></div></div><div class="_2KU2Q3t0eehftuvMIH1rvq _1mJz9uBTAolF8BAIYPOhZR undefined  reflex-splitter" wfd-id="42"></div><div class="vertical reflex-element" style="flex: 0.5 1 0%;" wfd-id="5"><div class="horizontal reflex-container" wfd-id="6"><div class="horizontal reflex-element" style="flex: 0.889713 1 0%;" wfd-id="24"><div class="_2XJ6jIujHvigLRHtOkz4fg " wfd-id="25"><div class="F1JFkhqUR0570-SOdUuLL" wfd-id="32"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      Pt0-DKdojEUQjnL7uRpnv
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      d73Sb1fbAoLgw71N6HrMd
      
      
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="214"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="41">Your Solutions</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="40"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button><div class="_2zIA85b7a-efFN-uLh36zI" wfd-id="33"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      _2ssALYD2i6qKLw6AG0N3vn
    " type="button" data-tip="Full Screen" data-tip-disable="false" tabindex="0" wfd-id="213" currentitem="false"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="39"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.333 469.333" fill="currentColor" class="_3twPHUQHDZ65TEPxCrGBkj"><path d="M160 0H10.667A10.66 10.66 0 000 10.667V160a10.66 10.66 0 0010.667 10.667H32A10.66 10.66 0 0042.667 160V42.667H160A10.66 10.66 0 00170.667 32V10.667A10.66 10.66 0 00160 0zM458.667 0H309.333a10.66 10.66 0 00-10.667 10.667V32a10.66 10.66 0 0010.667 10.667h117.333V160a10.66 10.66 0 0010.667 10.667h21.333A10.66 10.66 0 00469.333 160V10.667A10.66 10.66 0 00458.667 0zM458.667 298.667h-21.333a10.66 10.66 0 00-10.667 10.667v117.333H309.333a10.66 10.66 0 00-10.667 10.667v21.333a10.66 10.66 0 0010.667 10.667h149.333a10.66 10.66 0 0010.667-10.667V309.333a10.66 10.66 0 00-10.666-10.666zM160 426.667H42.667V309.333A10.66 10.66 0 0032 298.666H10.667A10.662 10.662 0 000 309.333v149.333a10.66 10.66 0 0010.667 10.667H160a10.66 10.66 0 0010.667-10.667v-21.333A10.66 10.66 0 00160 426.667z"></path></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="38"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      _2ssALYD2i6qKLw6AG0N3vn
    " type="button" data-tip="Restore Default Code" data-tip-disable="false" tabindex="0" wfd-id="212" currentitem="false"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="37"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="_2vWYTrW4vKajBhHX3_jXHI"><path d="M488 256a232.014 232.014 0 01-373.467 183.892 233.557 233.557 0 01-82.025-121.445 24 24 0 1146.235-12.894 185.25 185.25 0 0065.083 96.312A182.236 182.236 0 00256 440c101.458 0 184-82.542 184-184S357.458 72 256 72a182.241 182.241 0 00-112.175 38.135 184.6 184.6 0 00-32.139 31.792l-18.549 5.456-2.976-53.576A231.977 231.977 0 01488 256zM62.771 223.024l136-40a24 24 0 10-13.543-46.048L78.282 168.43l-6.32-113.761a24 24 0 10-47.924 2.662l8 144a24 24 0 0030.734 21.693z"></path></svg></span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="36"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      _2589iufwg3pAT7C-YUqVJV
      
      
      
      
      
      _2w9ZtI5MAL4pe5zVFXiWSN
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="211"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="35">Run Code</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="34"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button></div></div><div class="cRvOFwCPNupSDcJmVKhWz" wfd-id="31"><button class="QFURcY7nVWAXbnjWFms7n _14i4yeHanjVPeX1ZXUrxLW" wfd-id="210">Solution 1</button><button class="QFURcY7nVWAXbnjWFms7n " wfd-id="209">Solution 2</button><button class="QFURcY7nVWAXbnjWFms7n " wfd-id="208">Solution 3</button></div><div class="Bs4exbk01crxGAswK10cH _24cT3gf0kUv8To0yLbzS9W" wfd-id="30"></div><div class="_3t8NG61nHESOP1qu7oV8iT " wfd-id="26"><div class="_3E0jIuryFh6Tdub4CIzq4R " wfd-id="29"><div class="CodeMirror cm-s-monokai CodeMirror-overlayscroll CodeMirror-focused" wfd-id="243" style="width: 100%; height: 100%; font-size: 14px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 347px; left: 50px;" wfd-id="463"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0" wfd-id="811"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true" style="display: none;" wfd-id="462"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true" style="display: block; bottom: 0px;" wfd-id="460"><div style="height: 267.931px; top: 52.8621px;" wfd-id="461"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true" wfd-id="459"></div><div class="CodeMirror-gutter-filler" cm-not-content="true" wfd-id="458"></div><div class="CodeMirror-scroll" tabindex="-1" wfd-id="244"><div class="CodeMirror-sizer" style="margin-left: 46px; margin-bottom: -17px; border-right-width: 13px; min-height: 480px; min-width: 322.641px; padding-right: 6px; padding-bottom: 0px;" wfd-id="249"><div style="position: relative; top: 0px;" wfd-id="250"><div class="CodeMirror-lines" role="presentation" wfd-id="251"><div role="presentation" style="position: relative; outline: none;" wfd-id="252"><div class="CodeMirror-measure" wfd-id="457"><pre class="CodeMirror-line-like">x</pre></div><div class="CodeMirror-measure" wfd-id="456"></div><div style="position: relative; z-index: 1;" wfd-id="455"><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 0px; width: 601px; height: 20px;" wfd-id="1044"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 440px; width: 0px; height: 20px;" wfd-id="1043"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 20px; width: 601px; height: 420px;" wfd-id="1042"></div></div><div class="CodeMirror-cursors" wfd-id="454" style=""></div><div class="CodeMirror-code" role="presentation" style="" wfd-id="253"><div style="position: relative;" wfd-id="1005"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="1011"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="1013">1</div><div class="CodeMirror-gutter-elt" style="left: 36px; width: 10px;" wfd-id="1012"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle" wfd-id="452"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="1006"><span class="cm-keyword" wfd-id="1010">function</span> <span class="cm-def" wfd-id="1009">twoNumberSum</span>(<span class="cm-def" wfd-id="1008">array</span>, <span class="cm-def" wfd-id="1007">targetSum</span>) {</span></pre></div><div style="position: relative;" wfd-id="1000"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="1003"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="1004">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="1001">  <span class="cm-comment" wfd-id="1002">// Write your code here.</span></span></pre></div><div style="position: relative;" wfd-id="987"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="998"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="999">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="988"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="997">  </span><span class="cm-variable-2" wfd-id="996">array</span>.<span class="cm-property" wfd-id="995">sort</span>((<span class="cm-def" wfd-id="994">a</span>,<span class="cm-def" wfd-id="993">b</span>)<span class="cm-operator" wfd-id="992">=&gt;</span><span class="cm-variable-2" wfd-id="991">a</span><span class="cm-operator" wfd-id="990">-</span><span class="cm-variable-2" wfd-id="989">b</span>);</span></pre></div><div style="position: relative;" wfd-id="978"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="985"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="986">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="979"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="984">  </span><span class="cm-keyword" wfd-id="983">let</span> <span class="cm-def" wfd-id="982">left</span> <span class="cm-operator" wfd-id="981">=</span> <span class="cm-number" wfd-id="980">0</span>;</span></pre></div><div style="position: relative;" wfd-id="966"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="976"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="977">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="967"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="975">  </span><span class="cm-keyword" wfd-id="974">let</span> <span class="cm-def" wfd-id="973">right</span> <span class="cm-operator" wfd-id="972">=</span> <span class="cm-variable-2" wfd-id="971">array</span>.<span class="cm-property" wfd-id="970">length</span><span class="cm-operator" wfd-id="969">-</span><span class="cm-number" wfd-id="968">1</span>;</span></pre></div><div style="position: relative;" wfd-id="956"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="963"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="965">6</div><div class="CodeMirror-gutter-elt" style="left: 36px; width: 10px;" wfd-id="964"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle" wfd-id="403"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="957"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="962">  </span><span class="cm-keyword" wfd-id="961">while</span>(<span class="cm-variable-2" wfd-id="960">left</span><span class="cm-operator" wfd-id="959">&lt;</span><span class="cm-variable-2" wfd-id="958">right</span>){</span></pre></div><div style="position: relative;" wfd-id="942"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="954"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="955">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="943"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="953">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="952">  </span><span class="cm-keyword" wfd-id="951">const</span> <span class="cm-def" wfd-id="950">sum</span> <span class="cm-operator" wfd-id="949">=</span> <span class="cm-variable-2" wfd-id="948">array</span>[<span class="cm-variable-2" wfd-id="947">left</span>]<span class="cm-operator" wfd-id="946">+</span><span class="cm-variable-2" wfd-id="945">array</span>[<span class="cm-variable-2" wfd-id="944">right</span>];</span></pre></div><div style="position: relative;" wfd-id="931"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="939"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="941">8</div><div class="CodeMirror-gutter-elt" style="left: 36px; width: 10px;" wfd-id="940"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle" wfd-id="378"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="932"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="938">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="937">  </span><span class="cm-keyword" wfd-id="936">if</span>(<span class="cm-variable-2" wfd-id="935">sum</span><span class="cm-operator" wfd-id="934">===</span><span class="cm-variable-2" wfd-id="933">targetSum</span>){</span></pre></div><div style="position: relative;" wfd-id="919"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="929"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="930">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="920"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="928">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="927">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="926">  </span><span class="cm-keyword" wfd-id="925">return</span> [<span class="cm-variable-2" wfd-id="924">array</span>[<span class="cm-variable-2" wfd-id="923">left</span>],<span class="cm-variable-2" wfd-id="922">array</span>[<span class="cm-variable-2" wfd-id="921">right</span>]];</span></pre></div><div style="position: relative;" wfd-id="913"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="917"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="918">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="914"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="916">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="915">  </span>}</span></pre></div><div style="position: relative;" wfd-id="901"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="910"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="912">11</div><div class="CodeMirror-gutter-elt" style="left: 36px; width: 10px;" wfd-id="911"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle" wfd-id="348"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="902"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="909">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="908">  </span><span class="cm-keyword" wfd-id="907">else</span> <span class="cm-keyword" wfd-id="906">if</span>(<span class="cm-variable-2" wfd-id="905">sum</span><span class="cm-operator" wfd-id="904">&lt;</span><span class="cm-variable-2" wfd-id="903">targetSum</span>){</span></pre></div><div style="position: relative;" wfd-id="890"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="899"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="900">12</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" class="cm-tab-wrap-hack" style="padding-right: 0.1px;" wfd-id="891"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="898">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="897">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="896">  </span><span class="cm-variable-2" wfd-id="895">left</span><span class="cm-operator" wfd-id="894">++</span>;<span class="cm-tab" role="presentation" cm-text="	" wfd-id="893"> </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="892">  </span></span></pre></div><div style="position: relative;" wfd-id="884"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="888"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="889">13</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="885"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="887">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="886">  </span>}</span></pre></div><div style="position: relative;" wfd-id="872"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="881"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="883">14</div><div class="CodeMirror-gutter-elt" style="left: 36px; width: 10px;" wfd-id="882"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle" wfd-id="318"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="1031"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="1038">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="1037">  </span><span class="cm-keyword" wfd-id="1036">else</span> <span class="cm-keyword" wfd-id="1035">if</span>(<span class="cm-variable-2" wfd-id="1034">sum</span><span class="cm-operator" wfd-id="1033">&gt;</span><span class="cm-variable-2" wfd-id="1032">targetSum</span>){</span></pre></div><div style="position: relative;" wfd-id="863"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="870"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="871">15</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="864"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="869">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="868">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="867">  </span><span class="cm-variable-2" wfd-id="866">right</span><span class="cm-operator" wfd-id="865">--</span>;</span></pre></div><div style="position: relative;" wfd-id="857"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="861"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="862">16</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="1028"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="1030">  </span><span class="cm-tab" role="presentation" cm-text="	" wfd-id="1029">  </span>}</span></pre></div><div style="position: relative;" wfd-id="852"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="855"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="856">17</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="853"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="854">  </span>}</span></pre></div><div style="position: relative;" wfd-id="846"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="850"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="851">18</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="847"><span class="cm-tab" role="presentation" cm-text="	" wfd-id="849">  </span><span class="cm-keyword" wfd-id="848">return</span> [];</span></pre></div><div style="position: relative;" wfd-id="842"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="844"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="845">19</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="843">}</span></pre></div><div style="position: relative;" wfd-id="837"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="840"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="841">20</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="838"><span cm-text="" wfd-id="839">​</span></span></pre></div><div style="position: relative;" wfd-id="832"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="835"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="836">21</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="833"><span class="cm-comment" wfd-id="834">// Do not edit the line below.</span></span></pre></div><div style="position: relative;" wfd-id="824"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="830"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="831">22</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="825"><span class="cm-variable" wfd-id="829">exports</span>.<span class="cm-property" wfd-id="828">twoNumberSum</span> <span class="cm-operator" wfd-id="827">=</span> <span class="cm-variable" wfd-id="826">twoNumberSum</span>;</span></pre></div><div style="position: relative;" wfd-id="819"><div class="CodeMirror-gutter-wrapper" style="left: -46px;" wfd-id="822"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;" wfd-id="823">23</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;" wfd-id="820"><span cm-text="" wfd-id="821">​</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 13px; width: 1px; border-bottom: 0px solid transparent; top: 480px;" wfd-id="248"></div><div class="CodeMirror-gutters" style="height: 493px; left: 0px;" wfd-id="245"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 36px;" wfd-id="247"></div><div class="CodeMirror-gutter CodeMirror-foldgutter" wfd-id="246"></div></div></div></div></div><div class="_1LYpoj3S9weYIrpnzbc3mQ _-9XmY6KTbXkFVDX8vmSh6 QuickTest-CmWrapper" id="custom-input-box" wfd-id="28"><span class="_1tTqsijd03k4U7jlhA2Uha">array</span><div class="_3DlOYLiE27MkKCHvJ4JeGh"><div class="CodeMirror cm-s-monokai CodeMirror-overlayscroll" style="width: 100%; height: 100%; font-size: 14px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" wfd-id="810"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true"><div></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; min-width: 3px;"><div style="position: relative;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"><pre class="CodeMirror-line" role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"></div><div class="CodeMirror-code" role="presentation"></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px;"></div><div class="CodeMirror-gutters" style="left: 0px;"><div class="CodeMirror-gutter CodeMirror-lint-markers"></div><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 1px;"></div></div></div></div></div><span class="_1tTqsijd03k4U7jlhA2Uha">targetSum</span><div class="_3DlOYLiE27MkKCHvJ4JeGh"><div class="CodeMirror cm-s-monokai CodeMirror-overlayscroll" style="width: 100%; height: 100%; font-size: 14px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" wfd-id="809"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true"><div></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; min-width: 3px;"><div style="position: relative;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"><pre class="CodeMirror-line" role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"></div><div class="CodeMirror-code" role="presentation"></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px;"></div><div class="CodeMirror-gutters" style="left: 0px;"><div class="CodeMirror-gutter CodeMirror-lint-markers"></div><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 1px;"></div></div></div></div></div></div><div class="_1rbIALK91weRWJmtic4afp _-9XmY6KTbXkFVDX8vmSh6 dark" wfd-id="27"><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 1<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">-4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">-1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 2<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 3<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 4<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">-3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 5<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 6<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 7<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">-7</span><span class="token punctuation">,</span> <span class="token number">-5</span><span class="token punctuation">,</span> <span class="token number">-3</span><span class="token punctuation">,</span> <span class="token number">-1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">-5</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 8<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">-21</span><span class="token punctuation">,</span> <span class="token number">301</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">356</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">-47</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">163</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 9<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">-21</span><span class="token punctuation">,</span> <span class="token number">301</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">356</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">-47</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">164</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 10<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">-4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">-1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 11<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div><div class="T5If_4nMQzEw7OO_5WafD"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Test Case 12<svg aria-hidden="true" data-prefix="fas" data-icon="share-square" class="_3X0zN3mQa388ERt3siM8mS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-tip="Populate Quick Test" currentItem="false"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 008.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 01-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg></span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers language-json" style="font-size: 14px;"><code class=" language-json"><span class="token punctuation">{</span><span class="token property">"array"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token property">"targetSum"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre></div></div></div></div></div></div><div class="_2KU2Q3t0eehftuvMIH1rvq lzB3v1OXr9A743VV9WBkt undefined  reflex-splitter" wfd-id="23"></div><div class="horizontal reflex-element" style="flex: 0.110287 1 0%;" wfd-id="7"><div class="_2XJ6jIujHvigLRHtOkz4fg" wfd-id="8"><div class="F1JFkhqUR0570-SOdUuLL" wfd-id="14"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      Pt0-DKdojEUQjnL7uRpnv
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      d73Sb1fbAoLgw71N6HrMd
      
      
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="207"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="22">Custom Output</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="21"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      Pt0-DKdojEUQjnL7uRpnv
      _1xvgXzBGBfP6uIK3o0QJtY
      yuADB5LEGtqEMPhmGwWOA
      
      
      
      
      
      
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="206"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="20">Raw Output</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="19"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button><div class="_2zIA85b7a-efFN-uLh36zI" wfd-id="15"><div data-tip="" wfd-id="16" currentitem="false"><button class="
      _2X_Irl-V64mHgAub_AnCfI 
      qpzlH3yMUItLasFHlNlWg
      _1xvgXzBGBfP6uIK3o0QJtY
      qusEqkyk6wIWe1ylB-2Ux
      
      
      
      
      
      _2w9ZtI5MAL4pe5zVFXiWSN
    " type="button" data-tip-disable="false" tabindex="0" wfd-id="205"><span class="
    _7QNNHtAek0GZ6zXQfKIyR
    
  " wfd-id="18">Submit Code</span><div class="
    MfbTCIHgh7zKsKVcU1igM
    _2YffrGNVz4fCyRXa9fg1Yl
    
  " wfd-id="17"><div class="kpm_V7KqnvDCATK0kVP4f" data-tip="" style="height: 25px; width: 25px; border-color: white transparent;" currentitem="false"></div></div></button></div></div></div><div class="_3t8NG61nHESOP1qu7oV8iT" wfd-id="10"><div class="_3SdugAN4P-rv0QxFZK2f_b" wfd-id="13"><p class="w0CgNC9ET4BWPlgFDjMzt zQ0J04xlJZJ2rzZ2SqLn6">Run or submit code when you're ready.</p></div><div class="_8dQ-pzXj9IAt4nqw3ne59 u-hidden" wfd-id="12"><p class="_67JEbpH0ehLAGzMydGWAn">Aww, your code failed at least one of the test cases.</p></div><div class="wkTF5FJedJR8NwhJwV128 u-hidden" wfd-id="11"><p class="le3zqyGMvG5RFM--HI6K6">Aww, your code didn't pass the test case.</p><div class="_1w9CFLWUQfB694VziHZlCw"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Our Code's Output</span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers  language-json" style="font-size: 14px;"><code class="  language-json"></code></pre></div></div><div class="_1w9CFLWUQfB694VziHZlCw"><div class="_1TTYJqjHyXq5Wk4v2qxlCa WQFK1XYoNoHrSFZQqlC3B dark"><span class="mGA3QqPB7uQ-Bt6P-D73u">Your Code's Output</span><pre class="_2Z65yov7mdonKkpCXgc_4c line-numbers  language-json" style="font-size: 14px;"><code class="  language-json"></code></pre></div></div></div><pre class="_2pg3Hf65fDToaMwRONY_f6 _2DHTJmfIkDgfk0ixGK9unD u-hidden" style="font-size: 14px;"><code></code></pre></div><div class="_2omXFqsu3Zb85kBxmGXGG  " wfd-id="9"></div></div></div></div></div></div></div></div></div></div>
  <script type="text/javascript" src="./twoNumberSum_files/main.bundle.js.download"></script>

</body></html>