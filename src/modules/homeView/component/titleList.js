import React from "react";

class TitleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      myList: [],
      mounted: false,
      toggled: false
    };
    this.handleAddRemove = this.handleAddRemove.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== "") {
      this.setState({ mounted: true, url: nextProps.url }, () => {
        // this.props.loadContent();
      });
    }
    this.setState({
      data: nextProps.data,
      myList: nextProps.myList
    });
  }
  componentDidMount() {
    if (this.props.url !== "") {
      // this.loadContent();
      this.setState({ mounted: true });
    }
  }
  handleClick(id) {
    this.setState({
      toggled: !this.state.toggled
    });
  }
  handleAddRemove(item) {
    const { data } = this.state.myList;
    let itemInList = false;
    let newData = data;
    let key = undefined;

    if (data.length > 0) {
      _.map(data, (val, i) => {
        if (val == item) {
          key = i;
        }
      });
      if (key !== undefined) {
        newData.splice(key, 1);
      } else {
        newData.push(item);
      }
    } else {
      newData.push(item);
    }
    this.props.successMyList(newData);
    this.setState({
      change: ""
    });
  }
  render() {
    let titles = "";
    let ref = this;
    if (this.state.data) {
      titles =
        ref.state.data &&
        ref.state.data.results &&
        ref.state.data.results.length > 0 &&
        ref.state.data.results.map((title, i) => {
          let check = ref.state.myList.data.filter(k => {
            return k.toLowerCase() === title.original_title.toLowerCase();
          });
          if (i < 5) {
            let name = "";
            let backDrop =
              "http://image.tmdb.org/t/p/original" + title.backdrop_path;
            name = title.original_title;
            return (
              <div
                key={title.id}
                className="Item"
                style={{ backgroundImage: "url(" + backDrop + ")" }}
              >
                <div className="overlay">
                  <div className="title">{name}</div>
                  <div className="rating">{title.vote_average} / 10</div>
                  <div className="plot">{title.overview}</div>
                  <div className="ListToggle">
                    {check.length > 0 ? (
                      <div>
                        <i className="fa fa-fw fa-plus" />
                        <i
                          className="fa fa-check"
                          onClick={() => {
                            ref.handleAddRemove(name);
                          }}
                          style={{ background: "red" }}
                        />
                      </div>
                    ) : (
                      <div>
                        <i className="fa fa-fw fa-plus" />
                        <i
                          className="fa fa-fw fa-check"
                          onClick={() => {
                            ref.handleAddRemove(name);
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          } else {
            return <div key={title.id} />;
          }
        });
    }

    return (
      <div
        ref="titlecategory"
        className="TitleList"
        data-loaded={this.state.mounted}
      >
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">{titles}</div>
        </div>
      </div>
    );
  }
}

export default TitleList;
