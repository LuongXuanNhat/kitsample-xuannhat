// index.js

const proverbs = [
  "Có công mài sắt, có ngày nên kim",
  "Ăn quả nhớ kẻ trồng cây",
  "Uống nước nhớ nguồn",
  "Gần mực thì đen, gần đèn thì sáng",
  "Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao",
  "Tốt gỗ hơn tốt nước sơn",
  "Không thầy đố mày làm nên",
  "Thất bại là mẹ thành công",
  "Cái nết đánh chết cái đẹp",
  "Học ăn, học nói, học gói, học mở",
  "Đi một ngày đàng, học một sàng khôn",
  "Chim khôn kêu tiếng rảnh rang, người khôn nói tiếng dịu dàng dễ nghe",
  "Lá lành đùm lá rách",
  "Khó khăn mới biết bạn hiền",
  "Tiền vào nhà khó như gió vào nhà trống",
  "Giấy rách phải giữ lấy lề",
  "Trăm nghe không bằng một thấy",
  "Im lặng là vàng",
  "Một miếng khi đói bằng một gói khi no",
  "Ăn không nói có"
];

function getRandomProverb() {
  const index = Math.floor(Math.random() * proverbs.length);
  return proverbs[index];
}

module.exports = {
  getRandomProverb
};
