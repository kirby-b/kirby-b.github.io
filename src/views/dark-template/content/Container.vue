<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section title="Who am I?">
        I'm a dedicated technology enthusiast with a strong background in web application development, automation, and
        software development. My portfolio includes crafting python scripts, creating web applications, and creating 
        programs and scripts for hardware like drones, arduinos, and miscellaneous PCBs.My expertise lies in web development, 
        with a focus on PHP/Laravel. This is followed by my love for Python, which I use for scripting and automation. I'm driven 
        by the constant pursuit of knowledge and enjoy embracing new challenges, so much so that I am willing to learn and 
        contribute to concepts I have never done. There is nothing tech related I wont do. Beyond my technical pursuits, I have 
        a creative outlet in drawing and writing.
      </content-section>
      <content-section
        v-if="prouds"
        title="What am I proud of?"
      >
        <v-layout
          v-for="(proud, i) in prouds"
          :key="i"
        >
          <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex>
          <v-flex
            md11
            xs9
          >
            <p>
              <strong>{{ proud.text }}</strong><br>
              <small>{{ proud.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="experiences"
        title="Experiences"
      >
        <v-layout
          v-for="(experience, i) in experiences"
          :key="i"
        >
          <v-flex md4>
            {{ experience.from }} - {{ experience.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="experience.employer">{{ experience.employer }}</strong>
            <div v-if="experience.title">
              <i>{{ experience.title }}</i>
            </div>
            <div v-if="experience.description">
              {{ experience.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="educations"
        title="Education"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        title="Skills"
      >
        <template slot="actions">
          (% are relative not absolute)
        </template>
        <v-layout wrap>
          <template v-for="(skill, i) in skills">
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div class="mr-2 ml-2">
                <div class="align-center">
                  <v-icon small>
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    prouds: [
      {
        icon  : 'mdi-trophy',
        text  : '2nd, 3rd, and 4th in Regionals for Business Professionals of America in 2022-23',
        source: '(Python Programming(3th-2022), MySQL Concepts(2nd-2023), and Java Programming(4th-2022)',
      },
      {
        icon  : 'mdi-medal',
        text  : 'I have two certifications from certiport. One in Python, the other in Computational Thinking',
        source: '(https://certiport.pearsonvue.com/)',
      },
    ],
    experiences: [
      {
        from       : 'Nov 2023',
        to         : 'Present',
        employer   : 'Bay Arenac ISD Career Center',
        title      : 'Technology Tester',
        description: 'I test technology at the BAISD Career Center and work alongside the tech department to make various technologies.',
      },
    ],

    educations: [
      {
        from       : '2020',
        to         : '2024',
        title      : 'Diploma',
        location   : 'Bay City Western High School',
        description: '',
      },
      {
        from       : '2022',
        to         : '2024',
        title      : 'Graduated',
        location   : 'Bay-Arenac ISD Career Center',
        description: 'Computer Programming',
      },
    ],
    skills: [
      {
        title: 'Python Development',
        icon : 'mdi-language-python',
        value: 95,
      },
      {
        title: 'MySQL',
        icon : 'mdi-database-search',
        value: 90,
      },
      {
        title: 'Java Programming',
        icon : 'mdi-language-java',
        value: 85,
      },
      {
        title: 'Laravel Framework',
        icon : 'mdi-laravel',
        value: 90,
      },
      {
        title: 'WordPress Development',
        icon : 'mdi-wordpress',
        value: 50,
      },
      {
        title: 'JavaScript',
        icon : 'mdi-language-javascript',
        value: 80,
      },
      {
        title: 'TailwindCSS',
        icon : 'mdi-tailwind',
        value: 80,
      },
      {
        title: 'PowerShell Scripting',
        icon : 'mdi-powershell',
        value: 60,
      },
      {
        title: 'Arduino Development',
        icon : 'mdi-laptop',
        value: 75,
      },
      {
        title: 'Raspberry Pi',
        icon : 'mdi-raspberry-pi',
        value: 75,
      },
      { divider: true },
      {
        title: 'Git Version Control',
        icon : 'mdi-git',
        value: 65,
      },
      {
        title: 'Emphasis on Quality Rest',
        icon : 'mdi-sleep',
        value: 75,
      },
      {
        title: 'Video Editing',
        icon : 'mdi-video-box',
        value: 75,
      },
      {
        title: 'Problem Solving',
        icon : 'mdi-bullseye',
        value: 75,
      },
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}

.progress {
  margin-top: 0.1rem;
}
</style>
