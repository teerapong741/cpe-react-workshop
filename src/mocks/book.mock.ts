import { BookModel } from "../types/book.type";

const BOOKS_DATA_MOCK: BookModel[] = [
  {
    title: "เส้นทางสายหมอก",
    author: "ธนกฤต อัครเศรณี",
    description: "เรื่องราวของการเดินทางในโลกที่เต็มไปด้วยหมอกและความลึกลับ",
    price: 233,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "ใต้เงาจันทรา",
    author: "ปาริชาติ ภักดี",
    description: "บทสรุปของรักแท้ใต้เงาแห่งจันทรา",
    price: 443,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "กาลครั้งหนึ่งในความทรงจำ",
    author: "สุรีย์พร วัฒนกุล",
    description: "ความทรงจำที่หอมหวานในวัยเยาว์",
    price: 300,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "โลกในม่านหมอก",
    author: "กฤษณา ศรีวัฒน์",
    description: "สำรวจโลกใบใหม่ผ่านม่านหมอกแห่งความลับ",
    price: 438,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "เสียงเพรียกแห่งท้องทะเล",
    author: "มนัสวี ศรีสุวรรณ",
    description: "เสียงเรียกจากมหาสมุทรอันไกลโพ้น",
    price: 213,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "แสงสุดท้าย",
    author: "วรากร ลิ่มอรุณ",
    description: "การค้นหาความหมายของชีวิตก่อนแสงสุดท้ายจะลาลับ",
    price: 397,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "ลมหายใจแห่งป่าใหญ่",
    author: "พิมพ์ชนก บวรเกียรติ",
    description: "สัมผัสธรรมชาติอันยิ่งใหญ่ของผืนป่า",
    price: 455,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "ดาวตกที่ปลายฟ้า",
    author: "จารุวรรณ สุขเกษม",
    description: "ตามล่าความฝันผ่านคืนแห่งดาวตก",
    price: 572,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "คืนแห่งดวงดาว",
    author: "อรทัย ชัยชนะ",
    description: "เรื่องราวแห่งรักและการรอคอยในคืนดวงดาว",
    price: 567,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "บทเพลงในสายลม",
    author: "กนกพร ธนบดี",
    description: "บทเพลงแห่งความหวังที่ลอยมากับสายลม",
    price: 268,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "เงารักกลางใจ",
    author: "วรางคณา มนตรี",
    description: "ความรักที่เกิดขึ้นในใจกลางของความเงียบ",
    price: 555,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "รอยยิ้มใต้แสงจันทร์",
    author: "สิริยากร ศุภการ",
    description: "รอยยิ้มและความหวังใต้แสงจันทร์",
    price: 342,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "ดั่งดาวเคียงเดือน",
    author: "ชลธิชา พานิชย์",
    description: "ความรักที่เปล่งประกายดั่งดาวเคียงเดือน",
    price: 416,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "เส้นทางแห่งรัก",
    author: "ภัทรินทร์ รัตนโกสินทร์",
    description: "การเดินทางที่เต็มไปด้วยความรักและการให้อภัย",
    price: 527,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "พายุอารมณ์",
    author: "อารยา บุณยากร",
    description: "พายุอารมณ์ที่พัดผ่านความสัมพันธ์",
    price: 476,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "เงาสะท้อนแห่งรัก",
    author: "กฤษดา วิริยะสกุล",
    description: "เงาสะท้อนของหัวใจที่แตกสลาย",
    price: 472,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "ขอบฟ้าที่ไร้แสงดาว",
    author: "ปัทมพร ชาญชัย",
    description: "การตามหาแสงดาวที่หลงหายในขอบฟ้า",
    price: 509,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "ระบำแห่งสายลม",
    author: "วรรณวิภา สินธุเศรษฐ์",
    description: "ระบำแห่งสายลมพัดพาความรักมาเยือน",
    price: 379,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "เสียงหัวใจในสายหมอก",
    author: "ธิดารัตน์ สังข์ทอง",
    description: "เสียงของหัวใจที่ก้องกังวานในหมอกหนา",
    price: 426,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  },
  {
    title: "จังหวะรักในฤดูฝน",
    author: "นวลปราง มหัทธโนบล",
    description: "จังหวะของรักแท้ที่บรรเลงในฤดูฝน",
    price: 231,
    imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/old-books-cover-design-template-528851dfc1b6ed275212cd110a105122_screen.jpg?ts=1698687093"
  }
];

export default BOOKS_DATA_MOCK;