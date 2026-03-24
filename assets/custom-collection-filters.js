class CollectionFilters extends HTMLElement {
  constructor() {
    super();
  }
 get sectionId(){
  return this.dataset.sectionId
 }
  connectedCallback() {
    this.filterInputs = this.querySelectorAll("input");
    this.handleClick = this.handleClick.bind(this);

    this.filterInputs.forEach((input) => {
      input.addEventListener('change', this.handleClick);
    });
  }

  handleClick(event) {
  const input = event.currentTarget;
  const url = new URL(
    input.checked ? input.dataset.addUrl : input.dataset.removeUrl,
    window.location.origin
  );

  url.searchParams.set("section_id", this.section_id)
}
}
customElements.define("collection-filters", CollectionFilters);
