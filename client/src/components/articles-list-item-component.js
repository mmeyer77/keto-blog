import React, { Component } from "react";
import { Link } from "react-router-dom";

class ArticlesListItem extends Component {
  constructor(props) {
    //whenever we call this ArticleListItem this gets executed
    super(props); //*you have to ask for props for it to work, more research needed
    //to se how this works, JS is one of few lang that has this flaw
    this.onShowArticle = this.onShowArticle.bind(this); //link onshow class to this
  }

  onShowArticle() {
    window.location.pathname = `/single/${this.props.article._id}`;
  }

  renderDate(string) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(string);

    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }

  renderTags(tags) {
    return tags.map((tag) => {
      return (
        <span className="article__tags__span">
          <Link href="#" className={tag} key={tag}>
            {tag}
          </Link>
        </span>
      ); // we need to prevent duplicated tags because of KEY{this.onShowArticle()}
    });
  }

  render() {
    const { article } = this.props; // propiedad pasada desde el componente <ArticlesListItem article={article}
    return (
      <article className="post-cards" key={this.props.article._id}>
        <div className="card">
          {/* <Link onClick={this.onShowArticle}> */}
          <Link onClick={this.onShowArticle}>
            <img
              src="https://restaurantthemedemo.files.wordpress.com/2020/01/restaurant-new-06.jpg"
              className="card-img-top img-fluid"
              alt="..."
            ></img>
          </Link>

          <div className="card-body">
            <h2 className="card-header">
              <Link
                to={{ pathname: `/single/${article._id}` }}
                id={article._id}
                article={article}
                props={article._id}
              >
                {article.title}(Beta)
              </Link>
            </h2>
            <div className="article__tags">{this.renderTags(article.tags)}</div>
            <br></br>
            <span>Date Created: {this.renderDate(article.dateCreated)}</span>
          </div>
        </div>
      </article>
    );
  }
}

export default ArticlesListItem;
