class MangaUpdates {
  constructor() {
    const list = $(".manga .links");
    this.getUpdates().then((updates) => {
      updates.forEach((obj) => {
        let li = document.createElement("li");
        let el = document.createElement("a");
        el.href = obj.link;
        el.innerHTML = obj.title;
        li.appendChild(el);
        list.appendChild(li);
      });
    });
  }

  async getUpdates() {
    let list = [];
    await fetch(
      "https://cors-anywhere.herokuapp.com/https://mangadex.org/rss/follows/ZpmV7dFu5rKzfS3se6RhaEXg8cYwMtHn?h=0"
    )
      .then((res) => res.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        list = Array.from(data.querySelectorAll("item")).map((node) => {
          return {
            title: node.children[0].innerHTML,
            link: node.children[1].innerHTML,
          };
        });
      })
      .catch(() => {
        list = [
          {
            title: "Failed to contact server.",
            link: "",
          },
        ];
      });
    return list;
  }
}
