<template>
  <div id="app">
    <app-headernav></app-headernav>
    <div
      class="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column
       flex-column align-items-center sm-px-2 px-0"
    >
      <div class="container py-5">
        <b-card no-body>
          <div class="card bg-light">
            <b-card-header href="#" class="card-header btn btn-link p-0">
              <h2 class="card-header" v-b-toggle.collapseAbout>
                About Us
                <i class="fa fa-chevron-down pull-right"></i>
              </h2>
            </b-card-header>
            <b-collapse id="collapseAbout" class="card-body" visible>
              <div>
                <p class="text-justify">
                  Openness, accountability, and honesty define government transparency. In a free
                  society, transparency is government's obligation to share information with
                  citizens. It is at the heart of how citizens hold their public officials
                  accountable. Here at TGIF we believe that government should be transparent.
                </p>
                <p class="text-justify">
                  Governments exist to serve the people. Information on how officials conduct the
                  public business and spend taxpayer money must be readily available and easily
                  understood. This transparency allows good and just governance. Transparency
                  promotes accountability and provides information for citizens about what their
                  Government is doing.
                </p>
                <p class="text-justify">
                  We also believe that government should be participatory. Public engagement
                  enhances the Government's effectiveness and improves the quality of its decisions.
                  Knowledge is widely dispersed in society, and public officials benefit from having
                  access to that dispersed knowledge. We invite you to use our site to become
                  actively engaged in American government.
                </p>
                <p class="text-justify">
                  TGIF works to disclose information in forms that the public can readily find and
                  use. We solicit public feedback to identify information of greatest use to the
                  public.
                </p>
              </div>
            </b-collapse>
          </div>
        </b-card>
        <b-card no-body class="mt-5">
          <div id="accordion2" class="card bg-light mt-0">
            <b-card-header href="#" class="card-header btn btn-link p-0">
              <h2 class="card-header" v-b-toggle.collapseHistory>
                Background History of Government Transparency
                <i class="fa fa-chevron-down pull-right"></i>
              </h2>
            </b-card-header>
            <b-collapse id="collapseHistory" class="card-body" data-parent="#accordion2">
              <div>
                <p class="text-justify">
                  In the West, the idea that government should be open to public scrutiny and
                  susceptible to public opinion dates back at least to the time of the
                  Enlightenment, when many philosophes made an attack on absolutist doctrine of
                  state secrecy, a core part of their intellectual project. The passage of formal
                  legislative instruments to this end can also be traced to this time with Sweden,
                  for example, (which then included Finland as a Swedish-governed territory)
                  enacting free press legislation as part of its constitution (Freedom of the Press
                  Act, 1766). This approach, and that of the philosophes more broadly, is strongly
                  related to recent historiography on the eighteenth-century public sphere.
                </p>

                <p class="text-justify">
                  Influenced by Enlightenment thought, the revolutions in America (1776) and France
                  (1789), freedom of the press enshrined provisions and requirements for public
                  budgetary accounting and freedom of the press in constitutional articles. In the
                  nineteenth century, attempts by Metternichean statesmen to row back on these
                  measures were vigorously opposed by a number of eminent liberal politicians and
                  writers, Bentham, Mill and Acton prominent among the latter.
                </p>

                <p class="text-justify">
                  Open government is widely seen to be a key hallmark of contemporary democratic
                  practice and is often linked to the passing of freedom of information legislation.
                  Scandinavian countries claim to have adopted the first freedom of information
                  legislation, dating the origins of its modern provisions to the eighteenth century
                  and Finland continuing the presumption of openness after gaining independence in
                  1917, passing its Act on Publicity of Official Documents in 1951 (superseded by
                  new legislation in 1999).
                </p>

                <p class="text-justify">
                  The United States passed its Freedom of Information Act (FOIA) in 1966, FOIAs,
                  Access to Information Acts (AIAs) or equivalent laws were passed in Denmark and
                  Norway in 1970.
                </p>
              </div>
            </b-collapse>
          </div>
        </b-card>
      </div>
      <div class="container">
        <img src="../assets/us_congres.jpg" class="img-fluid rounded my-4" alt="Congres Chamber" />
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue';
import Footer from './Footer.vue';

export default {
  components: {
    'app-headernav': HeaderNav,
    'app-footer': Footer,
  },
};
</script>

<style></style>
