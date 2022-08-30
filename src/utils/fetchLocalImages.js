const load = async function () {
  let images = [];
  try {
    images = import.meta.glob("~/assets/images/*");
  } catch (e) {}
  return images;
};

let _images;

export const fetchLocalImages = async () => {
  _images = _images || load();
  return await _images;
};
