import React from 'react';
import './Projects.scss';
import ProjectTile from '../../Components/ProjectTile/ProjectTile';
import Button from '../../Components/Button/Button';


export default class Projects extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         projects: this.props.projects,
         filtered: this.props.projects,
         categories: [...new Set(
            this.props.projects.map(x => x.categories).flat()
         )].map(x => {
            return {
               name: x,
               active: false
            }
         })
      }
   }

   handleClick = (category) => {

      const copyProj = this.state.projects.filter(proj => {
         return proj.categories.includes(category)
      })

      const copyCateg = this.state.categories.map(cat => {
         let active = false;
         if (cat.name === category) {
            active = true;
         }
         return {
            name: cat.name,
            active: active
         }
      })
      this.setState({
         filtered: copyProj,
         categories: copyCateg
      })
   }

   clearFilters = () => {
      const copyCateg = this.state.categories.map(cat => {
         return {
            name: cat.name,
            active: false
         }
      })
      this.setState({
         categories: copyCateg,
         filtered: this.state.projects
      })
   }

   render() {
      return (
         <div className="projects-container">
            <div className="sidebar">
               <div className="title">Filter Projects:</div>
               {
                  this.state.categories.map((z, i) => {
                     const classes = ['item'];
                     if (z.active) {
                        classes.push('selected');
                     }
                     return (
                        <div
                           key={i}
                           className={classes.join(' ')}
                           onClick={() => this.handleClick(z.name)}
                        >
                           &mdash; {z.name}
                        </div>
                     )
                  })
               }
               {
                  this.state.categories.filter(x => x.active).length > 0 &&
                  <Button
                     color="light"
                     onClick={this.clearFilters}
                     text="&#10005; Clear"
                   />
               }




            </div>
            <div className="projects-grid">

               {
                  this.state.filtered.map((x, i) => <ProjectTile project={x} key={i} />)
               }
            </div>

         </div>
      )
   }
}
