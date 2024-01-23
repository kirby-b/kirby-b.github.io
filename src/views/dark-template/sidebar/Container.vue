<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Brodie <span class="light-blue--text text--lighten-3">Kirby</span>
        </h1>
        <span>
          A challenge-loving web developer
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{ item }">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.references">
        <template v-slot:items="{ items }">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template v-for="(item, i) in items">
                <v-flex
                  :key="i"
                  md6
                  sm6
                  xs6
                >
                  <h3>{{ item.name }}</h3>
                  <p style="margin-bottom:.5rem;">
                    {{ item.position }}
                  </p>
                  <p style="margin-bottom:.5rem;">
                    {{ item.email }}
                  </p>
                  <p style="margin-bottom:.5rem;">
                    {{ item.phone }}
                  </p>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Email',
              icon: 'mdi-email',
              text: 'kirby.brodie66@gmail.com',
            },
            {
              name: 'Website',
              icon: 'mdi-web',
              text: 'kirby-b.github.io',
            },
            {
              name: 'Location',
              icon: 'mdi-map-marker',
              text: 'Bay City, MI',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/kirby-b',
              link: 'https://github.com/kirby-b',
            },
            {
              icon: 'mdi-linkedin-box',
              text: 'linkedin.com/in/brodie-kirby',
              link: 'https://www.linkedin.com/in/brodie-kirby-1078bb2a7/',
            },
            {
              icon: 'mdi-web',
              text: 'leetcode/kirby-b',
              link: 'https://leetcode.com/Kirby-B/',
            },
            {
              icon: 'mdi-web',
              text: 'codepen.io/kirby-b',
              link: 'https://codepen.io/kirby-bs',
            },
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [
            {
              icon: 'mdi-code-tags',
              text: 'Expertise in web development',
            },
            {
              icon: 'mdi-bullseye',
              text: 'Problem-Solving Skills',
            },
            {
              icon: 'mdi-biohazard',
              text: 'Technical Challenges Enthusiast',
            },
            {
              icon: 'mdi-auto-fix',
              text: 'Tech Enthusiast and Hacker',
            },
            {
              icon: 'mdi-sleep',
              text: 'Emphasis on Quality Rest',
            },
            {
              icon: 'mdi-alarm',
              text: 'CyberSecurity Enthusiast',
            },
            {
              icon: 'mdi-alpha-p-circle',
              text: 'Python Connoisseur',
            },
            {
              icon: 'mdi-battery-high',
              text: 'Hardware Tinkerer',
            },
            {
              icon: 'mdi-code-tags',
              text: 'Always learning new tech concepts',
            },
          ],
        },
        references: {
          title: 'REFERENCES',
          items: [
            {
              name    : 'Jesse Dockett',
              position: 'Bay City Commissioner',
              email   : 'jdockett@gmail.com',
              phone   : '(989) 493-0656',
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar {
  background: #2e2e2e;
}
</style>
