// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [{
  title: 'Javascript',
  competency: 3,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'Node.JS',
  competency: 2,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'React',
  competency: 2,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Angular',
  competency: 1,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Vue',
  competency: 1,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'MongoDB',
  competency: 1,
  category: ['Web Development', 'Databases'],
},
{
  title: 'SQLServer/MySQL/SQL',
  competency: 2,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'Express.JS',
  competency: 1,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Git',
  competency: 2,
  category: ['Tools'],
},
{
  title: 'Typescript',
  competency: 1,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'HTML + SASS/SCSS/CSS',
  competency: 2,
  category: ['Web Development', 'Languages'],
},
{
  title: 'GraphQL',
  competency: 1,
  category: ['Web Development', 'Databases'],
},

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
