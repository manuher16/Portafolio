
<template>
  <v-card flat>
    <v-card-title>Habiliadades</v-card-title>
    <v-card-text>
      <v-row>
        <v-col md="6">
          <v-list>
            <v-list-group :value="false" color="#6F5FDB">
              <template v-slot:activator>
                <v-list three-line width="100%">
                  <v-list-item>
                    <v-list-icon
                      ><v-icon x-large>mdi-code-braces</v-icon></v-list-icon
                    >
                    <v-list-content>
                      <v-list-item-title>Frontend Developer</v-list-item-title>
                      <v-list-subtitle>
                        Herraminetas para diseño web
                      </v-list-subtitle>
                    </v-list-content>
                  </v-list-item>
                </v-list>
              </template>
              <v-list-item v-for="i in 10" :key="i"> {{ i }}</v-list-item>
            </v-list-group>
          </v-list>
        </v-col>
        <v-col md="6">
          <v-list>
            <v-list-group :value="false" color="#6F5FDB">
              <template v-slot:activator>
                <v-list three-line width="100%">
                  <v-list-item>
                    <v-list-icon
                      ><v-icon x-large>mdi-server-network</v-icon></v-list-icon
                    >
                    <v-list-content>
                      <v-list-item-title>Backend Developer</v-list-item-title>
                      <v-list-subtitle>
                        Herraminetas para servidores
                      </v-list-subtitle>
                    </v-list-content>
                  </v-list-item>
                </v-list>
              </template>
              <v-list three-line width="100%">
                <v-list-item
                  v-for="(item, i) in skills"
                  :key="i"
                  link
                  color="#6F5FDB"
                >
                  <v-list-item-avatar tile size="50">
                    <v-img :src="item.image" contain></v-img>
                  </v-list-item-avatar>
                  <v-list-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-subtitle>
                      Herraminetas para servidores
                    </v-list-subtitle>
                  </v-list-content>
                </v-list-item>
              </v-list>
            </v-list-group>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        name: "JavaScript",
        text: "",
        image:
          "https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png",
      },
      {
        name: "HTML",
        text: "",
        image:
          "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
      },

      {
        name: "Java",
        text: "",
        image:
          "https://1000marcas.net/wp-content/uploads/2020/11/Java-logo.png",
      },
      {
        name: "Python",
        text: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
      },
      {
        name: "TensorFlow",
        text: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png",
      },
      {
        name: "C#",
        text: "",
        image: "https://static.cdnlogo.com/logos/c/27/c.svg",
      },
      {
        name: "C++",
        text: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/911px-ISO_C%2B%2B_Logo.svg.png",
      },

      {
        name: "MariaDB",
        text: "",
        image:
          "https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent.png",
      },
      {
        name: "SQL Server",
        text: "",
        image:
          "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/sql-server-logo.png",
      },
      {
        name: "SQL Lite",
        text: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1280px-SQLite370.svg.png",
      },

      {
        name: "MongoDB",
        text: "",
        image:
          "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
      },
      {
        name: "Firebase",
        text: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png",
      },

      {
        name: "Ionic",
        text: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/1280px-Ionic_Logo.svg.png",
      },
      {
        name: "Electron",
        text: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/2048px-Electron_Software_Framework_Logo.svg.png",
      },
    ],
    skillsFrontend: [
      {
        name: "VUEJS",
        text: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
      },
      {
        name: "React",
        text: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      },
      {
        name: "Bootstrap",
        text: "",
        image:
          "https://anthoncode.com/wp-content/uploads/2019/01/bootstrap-logo-png.png",
      },
      {
        name: "Vuetify",
        text: "",
        image:
          "https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png",
      },
      {
        name: "Quasar",
        text: "",
        image:
          "https://camo.githubusercontent.com/44def50d1ff358d19bafe61e56fe9ff486fdf9d3b3a41a90417183a6ff4b097e/68747470733a2f2f63646e2e7261776769742e636f6d2f7175617361726672616d65776f726b2f7175617361722d6172742f38363363313462642f646973742f7376672f7175617361722d6c6f676f2d66756c6c2d696e6c696e652e737667",
      },

      {
        name: "CSS",
        text: "",
        image:
          "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png",
      },
    ],
    skillsBackend: [
      {
        name: "DialogFlow",
        text: "",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Dialogflow_logo.svg/1280px-Dialogflow_logo.svg.png",
      },
      {
        name: "Twilio",
        text: "",
        image:
          "https://twilio-cms-prod.s3.amazonaws.com/images/library-logo-resource2x.width-1000.png",
      },
      {
        name: "Gmail",
        text: "",
        image:
          "https://logos-marcas.com/wp-content/uploads/2020/11/Gmail-Logo.png",
      },
      {
        name: "Google Drive",
        text: "",
        image:
          "https://1000marcas.net/wp-content/uploads/2020/02/Google-Drive-Logo-1.png",
      },
      {
        name: "AWS",
        text: "",
        image:
          "https://uploads-ssl.webflow.com/5ecc07d89c19641b98843ecf/60c105b0e5332de1822a52ee_aws.png",
      },
      {
        name: "Digital Ocean",
        text: "",
        image: "https://cdn.worldvectorlogo.com/logos/digitalocean.svg",
      },
    ],
  }),
};
</script>

<style>
@media only screen and (min-width: 400px) {
  .card-skill {
    width: 100%;
  }
  .image-skill {
    width: 100%;
  }
}
@media only screen and (min-width: 700px) {
  .card-skill {
    width: 150px;
  }
  .image-skill {
    width: 150px;
    height: 150px;
  }
}
</style>