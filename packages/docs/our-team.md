---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/59847123?s=400&u=73557d2478048d9407e0bb912170dc147b9cf923&v=4',
    name: 'Kadir Boylu',
    title: 'Owner',
    links: [
      { icon: 'github', link: 'https://github.com/kadirboylu' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kadirboylu/' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of Boylu Router is led by me for now :)
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
