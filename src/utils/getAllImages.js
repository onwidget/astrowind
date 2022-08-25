const load = async function () {
  const images = import.meta.glob("~/assets/images/*");

  return images;
};

let _images;

export const getAllImages = async () => {
  _images = _images || load();

  return await _images;
};
