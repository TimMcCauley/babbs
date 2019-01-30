import React from 'react';
import './Writing.scss';
import BlogTile from '../../Components/BlogTile/BlogTile';
import Button from '../../Components/Button/Button';
import { monthNames } from '../../shared';



export default class Writing extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         writing: this.props.writing,
         filtered: this.props.writing,
         categories: [
            ...Array.from(new Set(
               this.props.writing.map(x => {
                  return {
                     date: new Date(x.date),
                     label: monthNames[new Date(x.date).getMonth()] + ' ' + new Date(x.date).getFullYear()
                  }
               })
            )).map(x => {
               return {
                  name: x.label,
                  active: false,
                  group: 'date',
                  date: x.date

               }
            }),
            ...Array.from(new Set(
               this.props.writing.map(x => x.categories).flat()
            )).map(x => {
               return {
                  name: x,
                  active: false,
                  group: 'category'
               }
            })
         ]

      }
   }

   handleClick = (group, key) => {

      const filterCopy = this.state.writing.filter(blog => {
         if (group === 'category') {
            return blog.categories.includes(key);
         } else {
            return key === monthNames[new Date(blog.date).getMonth()] + ' ' + new Date(blog.date).getFullYear()
         }
      })

      const catCopy = this.state.categories.map(cat => {
         if (cat.name === key) {
            return {
               name: cat.name,
               active: true,
               group: cat.group
            }
         } else {
            return {
               name: cat.name,
               active: false,
               group: cat.group
            }
         }
      })

      this.setState({
         filtered: filterCopy,
         categories: catCopy
      })


   }

   clearFilters = () => {
      const copyCateg = this.state.categories.map(cat => {
         return {
            name: cat.name,
            active: false,
            group: cat.group
         }
      })
      this.setState({
         categories: copyCateg,
         filtered: this.state.writing
      })
   }

   // console.log(this.state.categories
   //    .filter(x => x.group ==='date')
   //    .sort((a,b) =>  new Date(b.date) - new Date(a.date))
   // )

   render() {
      return (
         <div className="writing-container">
            <div className="writings-grid">
               {
                  this.state.filtered
                  .sort((a,b) =>  new Date(b.date) - new Date(a.date))
                  .map((writing, i) => <BlogTile image={false} blogPage={true} key={i} writing={writing} />)
               }
            </div>

            <div className="sidebar">
               <div className="sidebar-group">
                  <div className="title">Category</div>
                  {
                     this.state.categories
                     .filter(x => x.group === 'category')
                     .map((x,i) => {
                        const classes = ['item'];
                        if (x.active) {
                           classes.push('selected');
                        }
                        return (
                           <div
                              key={i}
                              onClick={() => this.handleClick('category', x.name)}
                              className={classes.join(' ')}
                           >
                              &mdash; {x.name}
                           </div>
                        )
                     })
                  }
               </div>
               <div className="sidebar-group">
                  <div className="title">Date</div>
                  {
                     this.state.categories
                     .filter(x => x.group ==='date')
                     .sort((a,b) =>  new Date(b.date) - new Date(a.date))
                     .map((x,i) => {
                        const classes = ['item'];
                        if (x.active) {
                           classes.push('selected');
                        }
                        return (
                           <div
                              onClick={() => this.handleClick('date', x.name)}
                              key={i}
                              className={classes.join(' ')}
                           >
                              &mdash; {x.name}
                           </div>
                        )
                     })


                  }
               </div>
               {
                  this.state.categories.filter(x => x.active).length > 0 &&
                  <Button
                     color="light"
                     onClick={this.clearFilters}
                     text="&#10005; Clear"
                   />
               }
            </div>
         </div>
      )
   }
}
