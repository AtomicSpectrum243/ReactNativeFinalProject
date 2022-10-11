export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    lightGray: '#B3B4B6',
    accent: '#FFC231',
    accentRed: '#FB5D2E',
    accentPink: '#F96165',
  };
  
  export const Categories = [
    {
      name: 'จานด่วน',
      image: require('../database/images/จานด่วน/กะเพรา.jpg'),
      items: [
        {
          name: 'ข้าวกะเพราหมูสับไข่ดาว',
          title: 'อาหารจานเดียวทำง่ายๆ',
          rating: '5.0',
          isTopOfTheWeek: true,
          image: require('../database/images/จานด่วน/กะเพรา.jpg'),
          Type: 'ผัด',
          Skill: 'ง่าย',
          Time: 15,
        },
        {
          name: 'ผัดไทยใส่ไข่',
          title: 'เครื่องน้อย เน้นเส้น สำหรับจานด่วน',
          rating: '4.5',
          isTopOfTheWeek: false,
          image: require('../database/images/จานด่วน/ผัดไทย.jpg'),
          Type: 'ผัด',
          Skill: 'ปานกลาง',
          Time: 30,
        },
        {
          name: 'ข้าวผัดโบราณ ',
          title: 'เมนูยอดนิยม รับประทานง่าย',
          rating: '4.2',
          isTopOfTheWeek: false,
          image: require('../database/images/จานด่วน/ข้าวผัด.jpg'),
          Type: 'ผัด',
          Skill: 'ง่าย',
          Time: 15,
        },
      ],
    },
    {
      name: 'อาหารอีสาน',
      image: require('../database/images/อาหารอีสาน/ส้มตำ.jpg'),
      items: [
        {
          name: 'ส้มตำปูปลาร้า',
          title: 'อร่อย แซ่บนัว',
          rating: '5.0',
          isTopOfTheWeek: true,
          image: require('../database/images/อาหารอีสาน/ส้มตำ.jpg'),
          Type: 'ตำ',
          Skill: 'ง่าย',
          Time: 15,
        },
        {
          name: 'ลาบหมู',
          title: 'อร่อย หอมข้าวคั่ว',
          rating: '4.5',
          isTopOfTheWeek: false,
          image: require('../database/images/อาหารอีสาน/ลาบหมู.jpg'),
          Type: 'ลวก',
          Skill: 'ปานกลาง',
          Time: 20,
        },
        {
          name: 'คอหมูย่าง',
          title: 'จิ้มแจ่ว แซ่บนัว',
          rating: '4.2',
          isTopOfTheWeek: false,
          image: require('../database/images/อาหารอีสาน/คอหมูย่าง.jpg'),
          Type: 'ย่าง',
          Skill: 'ยาก',
          Time: 35,
        },
      ],
    },
    {
      name: 'อาหารใต้',
      image: require('../database/images/อาหารใต้/ผัดสะตอกุ้ง.jpg'),
      items: [
        {
          name: 'ผัดสะตอกุ้ง',
          title: 'หรอยแรง!',
          rating: '5.0',
          isTopOfTheWeek: true,
          image: require('../database/images/อาหารใต้/ผัดสะตอกุ้ง.jpg'),
          Type: 'ผัด',
          Skill: 'ปานกลาง',
          Time: 25,
        },
        {
          name: 'คั่วกลิ้ง',
          title: 'ทานกับข้าวสวยร้อนๆ อร่อยมาก',
          rating: '4.5',
          isTopOfTheWeek: false,
          image: require('../database/images/อาหารใต้/คั่วกลิ้ง.jpg'),
          Type: 'ผัด',
          Skill: 'ง่าย',
          Time: 20,
        },
        {
          name: 'แกงไตปลา',
          title: 'หรอยแรง!',
          rating: '4.2',
          isTopOfTheWeek: false,
          image: require('../database/images/อาหารใต้/แกงไตปลา.png'),
          Type: 'ต้ม',
          Skill: 'ยาก',
          Time: 30,
        },
      ],
    },
    {
      name: 'อาหารเหนือ',
      image: require('../database/images/อาหารเหนือ/น้ำพริกหนุ่ม.jpg'),
      items: [
        {
          name: 'น้ำพริกหนุ่ม',
          title: 'ทำเองง่ายๆ ลำแต๊ๆเจ๊า',
          rating: '5.0',
          isTopOfTheWeek: true,
          image: require('../database/images/อาหารเหนือ/น้ำพริกหนุ่ม.jpg'),
          Type: 'น้ำพริก',
          Skill: 'ง่าย',
          Time: 30,
        },
        {
          name: 'ข้าวซอยไก่',
          title: 'หอมแกง อร่อยมาก',
          rating: '4.5',
          isTopOfTheWeek: false,
          image: require('../database/images/อาหารเหนือ/ข้าวซอยไก่.jpg'),
          Type: 'บะหมี่',
          Skill: 'ปานกลาง',
          Time: 50,
        },
        {
          name: 'แกงฮังเล',
          title: 'หอมเครื่องแกง รสชาติเข้มข้น',
          rating: '4.2',
          isTopOfTheWeek: false,
          image: require('../database/images/อาหารเหนือ/แกงฮังเล.jpg'),
          Type: 'แกง',
          Skill: 'ยาก',
          Time: 60,
        },
      ],
    },
    {
      name: 'ไข่',
      image: require('../database/images/ไข่/ไข่เจียว.jpg'),
      items: [
        {
          name: 'ไข่เจียวหมูสับ',
          title: 'เหลืองทอง หอมกรุ่น',
          rating: '5.0',
          isTopOfTheWeek: true,
          image: require('../database/images/ไข่/ไข่เจียว.jpg'),
          Type: 'ทอด',
          Skill: 'ง่าย',
          Time: 15,
        },
        {
          name: 'ผัดวุ้นเส้นไข่',
          title: 'อร่อยได้ง่ายๆ',
          rating: '4.5',
          isTopOfTheWeek: false,
          image: require('../database/images/ไข่/ผัดวุ้นเส้น.jpg'),
          Type: 'ผัด',
          Skill: 'ง่าย',
          Time: 15,
        },
        {
          name: 'ไข่พะโล้ + น่องไก่',
          title: 'รสชาติเข้มข้น กลมกล่อม',
          rating: '4.2',
          isTopOfTheWeek: false,
          image: require('../database/images/ไข่/ไข่พะโล้.jpg'),
          Type: 'ต้ม',
          Skill: 'ยาก',
          Time: 60,
        },
      ],
    },
    {
      name: 'ขนม',
      image: require('../database/images/ขนม/ข้าวเหนียวมะม่วง.jpg'),
      items: [
        {
          name: 'ข้าวเหนียวมะม่วง',
          title: 'หอมหวานมันกะทิ',
          rating: '5.0',
          isTopOfTheWeek: true,
          image: require('../database/images/ขนม/ข้าวเหนียวมะม่วง.jpg'),
          Type: 'ผลไม้ขนมหวาน',
          Skill: 'ปานกลาง',
          Time: 50,
        },
        {
          name: 'บัวลอยไข่หวาน',
          title: 'หอมหวานกะทิ อร่อย',
          rating: '4.5',
          isTopOfTheWeek: false,
          image: require('../database/images/ขนม/บัวลอยไข่หวาน.jpg'),
          Type: 'ขนมหวาน',
          Skill: 'ปานกลาง',
          Time: 30,
        },
        {
          name: 'ขนมชั้นใบเตย',
          title: 'หอมกลิ่นใบเตย อร่อยหวานมัน',
          rating: '4.2',
          isTopOfTheWeek: false,
          image: require('../database/images/ขนม/ขนมชั้นใบเตย.jpg'),
          Type: 'ขนมหวาน',
          Skill: 'ยาก',
          Time: 60,
        },
      ],
    },
  ];