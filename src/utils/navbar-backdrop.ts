export const navbarBackdrop = () => {
  const listItem = document.querySelectorAll("#landing-header li");
  const menuBackdrop = document.querySelector("#menu-backdrop") as HTMLElement;
  listItem.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const { left, top, width, height } = item.getBoundingClientRect();

      listItem.forEach((item) => {
        item.classList.remove("rounded");
      });
      menuBackdrop.style.setProperty("--left", `${left}px`);
      menuBackdrop.style.setProperty("--top", `${top}px`);
      menuBackdrop.style.setProperty("--width", `${width}px`);
      menuBackdrop.style.setProperty("--height", `${height}px`);
      menuBackdrop.style.opacity = "1";
      menuBackdrop.style.visibility = "visible";
    });

    item.addEventListener("mouseleave", () => {
      menuBackdrop.style.opacity = "0";
      menuBackdrop.style.visibility = "hidden";

      listItem.forEach((item) => {
        item.classList.add("rounded");
      });
    });
  });
};
