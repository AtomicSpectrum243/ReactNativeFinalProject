export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    lightGray: '#B3B4B6',
    accent: '#ac8d4e',
    accentRed: '#b83d0f',
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
          material: '- หมูสับ 300 กรัม \n- ใบกะเพรา 50 กรัม \n- พริกแดงจินดา 1 ช้อนโต๊ะ \n- กระเทียม 1 ช้อนโต๊ะ \n- ซอสหอยนางรม 1 ช้อนโต๊ะ \n- น้ำปลา 1 ช้อนโต๊ะ \n- น้ำตาลทราย 1 ช้อนชา \n- น้ำมัน (สำหรับผัดกะเพรา) 1 ช้อนโต๊ะ \n- ไข่ไก่ 1 ฟอง \n- น้ำมัน (สำหรับทอดไข่ดาว) ½ ถ้วยตวง',
          ingredients: [
            require('../database/images/จานด่วน/ส่วนผสม_กะเพรา/หมูสับ.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_กะเพรา/ใบกระเพรา.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_กะเพรา/จินดาแดง.png'),
            require('../database/images/จานด่วน/ส่วนผสม_กะเพรา/กระเทียม.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_กะเพรา/ซอสหอย.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_กะเพรา/น้ำปลา.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_กะเพรา/น้ำตาล.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_กะเพรา/น้ำมัน.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_กะเพรา/ไข่ไก่.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_กะเพรา/น้ำมันปาล์ม.jpg'),
          ],
          FoodList: 'STEP 1 : ทอดไข่ดาวกรอบ ๆ\n- ตั้งกระใส่น้ำมันรอให้ร้อนจัด ค่อยตอกไข่ไก่ลงไปทอดจนไข่ดาวกรอบ ตักขึ้นพักไว้ให้สะเด็ดน้ำมัน\n \nSTEP 2 : ทำผัดกะเพราหมูสับ\n- ตั้งกระทะใส่น้ำมันให้พอร้อน แล้วใส่กระเทียม และพริกแดงจินดาลงไปผัดจนส่งกลิ่นหอม จากนั้นใส่หมูสับลงไปผัด\n \n- เมื่อหมูเริ่มสุกให้ปรุงรสด้วย ซอสหอยนางรม น้ำปลา และน้ำตาลทราย ผัดจนทุกอย่างเข้ากันดี จากนั้นใส่ใบกะเพราลงไปผัดให้สลดลงเล็กน้อย\n \nSTEP 3 : จัดเสิร์ฟผัดกะเพราหมูสับไข่ดาว \n- ตักข้าวสวยร้อน ๆ ใส่จานราดด้วยหมูสับผัดกะเพราหมูสับ โปะด้วยไข่ดาวกรอบ ๆ เสิร์ฟพร้อมน้ำปลาพริก เพียงเท่านี้เราก็จะได้เมนูผัดกะเพราเด็ด ๆ ที่ทำกินเองได้แล้ว!'
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
          material: '- กุ้งแห้ง 1 ช้อนโต๊ะ \n- ไชโป๊ 1 ช้อนโต๊ะ \n- หอมแดงสับหยาบ 2 ช้อนโต๊ะ \n- กระเทียมสับ 2 ช้อนโต๊ะ \n- น้ำมันพืช 2 ช้อนโต๊ะ \n- เต้าหู้แข็งหั่นแท่ง 3 ช้อนโต๊ะ \n- เส้นผัดไทยแช่น้ำ 150 กรัม \n- ใบกุ้ยช่าย 30 กรัม \n- ไข่เป็ด 2 ฟอง \n- ถั่วลิสงป่น 2 ช้อนโต๊ะ \n- พริกป่น (ตามชอบ) \n- น้ำตาลมะพร้าว 200 กรัม \n- น้ำปลา 200 มิลลิลิตร \n- น้ำมะขามเปียก 200 มิลลิลิตร',
          ingredients: [
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/กุ้งแห้ง.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/ไชโป๊.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/หอมแดง.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/กระเทียม.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/น้ำมัน.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/เต้าหู้.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/เส้นผัดไทย.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/กุยช่าย.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/ไข่เป็ด.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/ถั่ว.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/พริกป่น.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/น้ำตาลมะพร้าว.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/น้ำปลา.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ผัดไทย/มะขาม.jpg'),
          ],
          FoodList: 'STEP 1 : เริ่มด้วยการทำน้ำผัดไทยก่อน โดยนำน้ำตาลมะพร้าว น้ำมะขามเปียก และน้ำปลา ใส่ลงในกระทะ เคี่ยวด้วยไฟอ่อน จนส่วนผสมทั้งหมดส่งกลิ่นหอมละลายเป็นเนื้อเดียวกัน ปิดไฟและพักไว้\n \nSTEP 2 : ตั้งกระทะใส่น้ำมัน รอจนน้ำมันเริ่มร้อนใส่หอมแดง กระเทียม และไชโป๊ลงไป ผัดจนส่งกลิ่นหอม จึงใส่เต้าหู้แข็งลงไปผัดต่ออีกสักครู่พอสุก\n \nSTEP 3 : จากนั้นใช้ไฟแรง ใส่เส้นผัดไทยลงไป ผัดให้เส้นอ่อนสุกนุ่ม แล้วจึงราดด้วยน้ำซอสมะขามที่เตรียมไว้ประมาณ 2 ทัพพี\n \nSTEP 4 : เมื่อน้ำผัดไทยซึมเข้าเส้นแล้ว ให้ใส่ถั่วงอก และใบกุ้ยช่าย ตามด้วยตอกไข่เป็ดใส่ลงไป โดยไข่เป็ดให้ขยี้จนไข่แตก พอไข่เริ่มสุกจึงผัดคลุกเคล้าให้ส่วนผสมทั้งหมดเข้ากัน\n \nSTEP 5 : ปิดไฟตักใส่จาน โรยด้วยถั่วป่น และพริกป่น ปริมาณตามชอบ กินกับถั่วงอกดิบและกุ้ยช่ายสด ยิ่งเพิ่มความอร่อยกลมกล่อมมากขึ้น'
        },
        {
          name: 'ข้าวผัดโบราณ',
          title: 'เมนูยอดนิยม รับประทานง่าย',
          rating: '4.2',
          isTopOfTheWeek: false,
          image: require('../database/images/จานด่วน/ข้าวผัด.jpg'),
          Type: 'ผัด',
          Skill: 'ง่าย',
          Time: 15,
          material: '- ข้าวสวย 1 ถ้วย \n- สันคอหมู หรือสันนอกหมู 100 กรัม \n- กระเทียม 1 ช้อนโต๊ะ \n- คะน้า 1-2 ต้น ตามชอบ \n- มะเขือเทศ 1-2 ลูก \n- หอมใหญ่ 1 ลูก \n- ไข่ไก่ 2 ฟอง \n- ซอสปรุงรส 2 ช้อนโต๊ะ \n- ซีอิ๊วขาว 2 ช้อนโต๊ะ \n- ซีอิ๊วดำ ½ ช้อนชา \n- พริกป่น (ตามชอบ) \n- น้ำมันพืช 2 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/ข้าว.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/สันคอ.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/กระเทียม.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/คะน้า.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/มะเขือ.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/หอมแดง.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/ไข่ไก่.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/ซอสปรุงรส.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/ซีอิ๊วดำ.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/พริกไทย.jpg'),
            require('../database/images/จานด่วน/ส่วนผสม_ข้าวผัด/น้ำมัน.jpg'),
          ],
          FoodList: 'STEP 1 : ตั้งกระทะ ใช้ไฟปานกลาง ใส่น้ำมันลงไป ใส่กระเทียมลงไปผัดให้พอหอม\n \nSTEP 2 : ใส่หมูลงไป ผัดจนเริ่มสุก ใส่ไข่ลงไปตีให้แตก ผัดจนพอเริ่มสุก\n \nSTEP 3 : ใส่ข้าวลงไป ปรุงรสด้วยซอสปรุงรส ซีอิ๊วขาว ซีอิ๊วดำ ผัดให้เข้ากันดี\n \nSTEP 4 : ใส่ผักทั้งหมดลงไป ผัดให้เข้ากัน และผักสุกดี\n \nSTEP 5 : โรยพริกไทยตามชอบ ผัดพอเข้ากัน ปิดไฟเตรียมเสิร์ฟได้เลย'
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
          material: '- มะละกอสับ  \n- พริกสด 4 เม็ด \n- กระเทียม 5 กลีบ \n- น้ำตาลปีบ ½ ช้อนโต๊ะ \n- มะนาว ½ ลูก \n- น้ำปลาร้า (ต้มสุก) 3 ช้อนโต๊ะ \n- มะเขือเทศเชอร์รี่ 5 ลูก \n- ปูดองลวกสุก 2 ตัว \n- กุ้งแห้ง \n- เม็ดกระทิน',
          ingredients: [
            require('../database/images/อาหารอีสาน/ส่วนผสม_ส้มตำ/ส้มตำ.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ส้มตำ/พริก.png'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ส้มตำ/กระเทียม.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ส้มตำ/น้ำตาลมะพร้าว.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ส้มตำ/มะนาว.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ส้มตำ/น้ำปลาร้า.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ส้มตำ/มะเขือเทศเชอรี่.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ส้มตำ/ปูดอง.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ส้มตำ/กุ้งแห้ง.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ส้มตำ/เม็ดกระทิน.jpg'),
          ],
          FoodList: 'STEP 1 : ใส่พริกสดและกระเทียมในครกตำให้ละเอียด แล้วใส่น้ำตาลปีบ, น้ำปลาร้า, บีบน้ำมะนาว ลงในครก ใช้สากค้นให้น้ำตาลปีบละลาย \n \nSTEP 2 : ใส่มะเขือเทศเชอร์รี่หัน, ปูดองลวกสุก, กุ้งแห้ง, มะละกอ ลงพร้อมกันในครกตำให้เครื่องเข้ากัน\n \nSTEP 3 : เสร็จแล้วตักใส่จานโรยด้วยเม็ดกระทิน เพียงเท่านี้ก็ได้ส้มตำแซ่บๆ'
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
          material: '- หมูสับ 300 กรัม \n- น้ำเปล่า ½ ถ้วย \n- ต้นหอมซอย 2 ต้น \n- ใบสะระแหน่ 2 ต้น \n- ผักชีฝรั่งซอย 2 ต้น \n- หอมแดงซอย 3 กลีบ \n- พริกป่น 2 ช้อนโต๊ะ \n- น้ำปลา 2 ช้อนโต๊ะ \n- น้ำมะนาว 2 ช้อนโต๊ะ \n- ข้าวคั่ว 2 ช้อนโต๊ะ \n- น้ำตาล ½ ช้อนชา \n- พริกแห้งทอด (สำหรับตกแต่ง)',
          ingredients: [
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/หมูสับ.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/น้ำ.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/ต้นหอม.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/ใบ.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/ผักชี.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/หอมแดง.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/พริกป่น.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/น้ำปลา.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/น้ำมะนาว.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/ข้าวคั่ว.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/น้ำตาล.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_ลาบหมู/พริกแห้ง.jpg'),
          ],
          FoodList: 'STEP 1 : รวนหมูสับ\n- ใส่น้ำเปล่าลงในหม้อ แล้วใส่หมูสับลงไปรวนให้สุก\n \nSTEP 2 : ปรุงรสลาบหมู\n- ตักหมูที่รวนแล้วใส่ในชามผสม\n- ใส่เครื่องปรุง พริกป่น น้ำปลา ข้าวคั่ว และน้ำตาล คลุกเค้าให้เข้ากัน\n- จากนั้นเติมมะนาว ผักชีฝรั่ง หอมแดงซอย ต้มหอม ผักชีฝรั่ง และใบสะระแหน่ จากนั้นคลุกเคล้าให้เข้ากัน\n \nSTEP 3 : จัดเสิร์ฟ\n- ตัก “ลาบหมู” ลงใส่จานที่ต้องการจัดเสิร์ฟ ตกแต่งด้วยพริกแห้งทอด และใบสะระแหน่ กินคู่กับผักเคียง แค่นี้ก็เสร็จแล้ว!'
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
          material: '- เนื้อสันคอ 500 กรัม \n- น้ำมันหอย 2 ช้อนโต๊ะ \n- เกลือ 2 ช้อนชา \n- น้ำผึ้ง 2 ช้อนโต๊ะ \n- นมข้นจืด ตรามะลิ โปรเฟสชั่นแนล 1/4 ถ้วย \n- 3 เกลอ 1 ช้อนโต๊ะ (รากผักชี / กระเทียม / พริกไทย) \n- ซีอิ๊วขาว 3 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/สันคอ.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/ซอสหอย.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/เกลือ.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/น้ำผึ้ง.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/นมข้น.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/สามเกลอ.jpg'),
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/ซีอิ๊วดำ.jpg'),
          ],
          FoodList: 'STEP 1 : หมักคอหมู\n- นำคอหมูมาจิ้มด้วยส้อมให้ทั่ว ก่อนนำไปหมัก\n- เทพริกไทยเม็ด กระเทียม ผักชี เกลือ น้ำผึ้ง ซีอิ๊วขาว น้ำมันหอย และ นมข้นจืด ตรามะลิ โปรเฟสชั่นแนล ลงไปในชามผสมแล้วนำคอหมูที่เตรียมไว้ลงไปหมัก เป็นเวลาอย่างน้อย 30 นาที\n \nSTEP 2 : ย่างคอหมู\n- นำคอหมู (STEP 1) ที่หมักครบเวลาเรียบร้อยแล้วมาย่างบนกระทะ ด้วยไฟกลางค่อนไปทางอ่อน จนหมูสุกทั่วทั้งชิ้น\n- นำคอหมูย่างที่สุกแล้วมาหั่นสไลซ์บางชิ้นพอดีคำ จัดใส่จานพร้อมตกแต่งด้วยผักกาดหอม แตงกวา และมะเขือเทศ เสิร์ฟคู่กับน้ำจิ้มแจ่วรสแซ่บ เท่านี้ก็ได้ “คอหมูย่าง”'
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
          material: '- สะตอแกะผ่าครึ่ง 100 กรัม \n- กุ้งสด 200 กรัม \n- กะปิ 1 ช้อนโต๊ะ \n- น้ำตาลปี๊บ 2 ช้อนชา \n- น้ำปลา 2 ช้อนโต๊ะ \n- พริกขี้หนู 20 เม็ด \n- กระเทียมไทย 1 หัว \n- มะนาว 1 ช้อนโต๊ะ \n- น้ำมันพืช 3 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารใต้/ส่วนผสม_ผัดสะตอกุ้ง/สะตอ.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_ผัดสะตอกุ้ง/กุ้ง.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_ผัดสะตอกุ้ง/กะปิ.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_ผัดสะตอกุ้ง/น้ำตาลมะพร้าว.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_ผัดสะตอกุ้ง/น้ำปลา.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_ผัดสะตอกุ้ง/พริก.png'),
            require('../database/images/อาหารใต้/ส่วนผสม_ผัดสะตอกุ้ง/กระเทียม.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_ผัดสะตอกุ้ง/น้ำมะนาว.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_ผัดสะตอกุ้ง/น้ำมัน.jpg'),
          ],
          FoodList: 'STEP 1 : ทำพริกแกงสำหรับผัดสะตอ โดยการใส่กระเทียมลงไปในครก ตามด้วยพริกขี้หนู กะปิ และน้ำตาลปี๊บ โขลกให้ละเอียด ตักใส่ถ้วยพักไว้\n \nSTEP 2 : นำกระทะตั้งไฟ ความร้อนปานกลาง เทน้ำมันพืชลงไป รอน้ำมันร้อน ใส่พริกแกงที่เตรียมไว้ ผัดจนหอม จากนั้นใส่กุ้งลงไปผัดจนสุก\n \nSTEP 3 : ใส่สะตอแกะผ่าครึ่ง ผัดจนสุก จากนั้นปรุงรสด้วยน้ำปลา และมะนาวค่ะ ผัดต่อให้เข้ากันดีค่ะ เสร็จแล้วปิดไฟยกลง ตักใส่จานพร้อมเสิร์ฟแล้วจ้า'
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
          material: '- เนื้อหมูสับ 250 กรัม \n- พริกแกงคั่วกลิ้ง 1 ½ ช้อนโต๊ะ \n- ตะไคร้ซอย 1 ช้อนโต๊ะ \n- พริกชี้ฟ้าแดงหั่น 1 เม็ดใหญ่ \n- ใบมะกรูดหั่นฝอย 1 ช้อนโต๊ะ \n- พริกไทยอ่อน 1 ช้อนโต๊ะ \n- น้ำปลา 1 ช้อนโต๊ะ \n- ผงปรุงรส 1/2 ช้อนชา \n- น้ำมันรำข้าว 1 ช้อนโต๊ะ \n- น้ำเปล่า 3 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารใต้/ส่วนผสม_คั่วกลิ้ง/หมูสับ.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_คั่วกลิ้ง/พริกแกง.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_คั่วกลิ้ง/ตะไคร้.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_คั่วกลิ้ง/พริกชี้.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_คั่วกลิ้ง/ใบ.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_คั่วกลิ้ง/พริกไทย.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_คั่วกลิ้ง/น้ำปลา.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_คั่วกลิ้ง/ผง.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_คั่วกลิ้ง/น้ำมัน.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_คั่วกลิ้ง/น้ำ.jpg'),
          ],
          FoodList: 'STEP 1 : ผัดพริกแกง\n- ตั้งกระทะโดยใช้ไฟกลาง พอกระทะร้อนใส่น้ำมันลงไปตามด้วยพริกแกงคั่วกลิ้ง ผัดให้มีกลิ่นหอม\n \nSTEP 2 : ใส่หมูสับ + ปรุงรส\n- นำหมูสับที่เตรียมไว้ใส่ลงไปค่ะ ผัดให้หมูสับเข้ากับน้ำพริกแกง ระหว่างนี้เติมน้ำเปล่าต้มสุกที่เตรียมไว้ค่ะ จะได้ผัดได้ง่ายขึ้น\n- เมื่อส่วนผสมเข้ากันดีแล้ว ปรุงรสด้วยผงปรุงรสและน้ำปลา ผัดให้เข้ากันอีกครั้ง\n- นำพริกไทยอ่อน ตะไคร้ซอย ใบมะกรูดซอย และพริกชี้ฟ้าแดง ใส่ลงไปผัดให้เข้ากัน เมื่อหมูสุกและทุกอย่างเข้ากันดี ปิดไฟได้เลยค่ะ\n \nSTEP 3 : จัดเสิร์ฟ \n- นำคั่วกลิ้งหมูที่สุกแล้วจัดเสิร์ฟใส่จาน ตกแต่งด้วยใบโหระพา พริกชี้ฟ้าแดงซอย และใบมะกรูดซอย กินกับผักเครื่องเคียงตามชอบได้เลยค่ะ'
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
          material: '- ไตปลาทู ½ ถ้วย \n- น้ำเปล่า 2-3 ถ้วย \n- หน่อไม้ ½ ถ้วย \n- มะเขือเปราะ ½ ถ้วย \n- ถั่วฝักยาว หั่นท่อน ½ ถ้วย \n- เนื้อปลาทูย่าง 1 ถ้วย \n- น้ำมะขามเปียก ½ ถ้วย \n- หอมแดง 2 หัว \n- ข่า 1 แง่ง \n- ตะไคร้ 2 ต้น \n- ใบมะกรูดฉีก 4 ใบ \n- กะปิ ½ ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/ไตปลา.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/น้ำ.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/หน่อไม้.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/มะเขือ.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/ถั่วฝักยาวหั่นห่อน.png'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/ปลาทู.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/มะขาม.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/หอมแดง.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/ข่า.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/ตะไคร้.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/ใบมะกรูด.jpg'),
            require('../database/images/อาหารใต้/ส่วนผสม_แกงไตปลา/กะปิ.jpg'),
          ],
          FoodList: 'STEP 1 : ตำพริกแกงไตปลา\n- ใส่พริกแห้งตำให้ละเอียด แล้วใส่ผิวมะกรูด ตะไคร้สับ และขมิ้น โขลกให้ละเอียด ตามด้วยหอมแดง กระเทียม ส่วนพริกไทยขาว พริกไทยดำ ให้โขลกแยกแล้วใส่ทีหลังสุด ตำเครื่องแกงทั้งหมดให้ละเอียด เข้ากันดี\n \nSTEP 2 : ต้มไตปลา\n- ตั้งหม้อ ใส่หอมแดง ข่า ตะไคร้ ใบมะกรูดฉีก มะขามเปียก ตามด้วยไตปลา และน้ำเล็กน้อย พอเดือดได้ที่ยกขึ้น กรองแล้วพักไว้\n \nSTEP 3 : ต้มแกงไตปลา\n- ตั้งหม้อต้มน้ำให้เดือด ตามด้วยเครื่องแกงที่ตำไว้ และกะปิคนให้เข้ากัน ตามด้วย ใบมะกรูด ไตปลาที่ต้มไว้ พอเดือดใส่หน่อไม้ มะเขือเปราะ เนื้อปลาย่าง ถั่วฝักยาว พอเดือดอีกครั้งให้ปิดไฟ ตักใส่ชามจัดเสิร์ฟ เป็นอันเสร็จเรียบร้อย'
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
          material: '- พริกหนุ่ม 7 เม็ด \n- หอมแดง 4 หัว \n- กระเทียม 10 กลีบ  \n- น้ำปลา 1 ช้อนโต๊ะ \n- เกลือ 1 ช้อนชา \n- น้ำมะนาว 2 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารเหนือ/ส่วนผสม_น้ำพริก/พริกหนุ่ม.png'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_น้ำพริก/หอมแดง.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_น้ำพริก/กระเทียม.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_น้ำพริก/น้ำปลา.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_น้ำพริก/เกลือ.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_น้ำพริก/น้ำมะนาว.jpg'),
          ],
          FoodList: 'STEP 1 : ย่างส่วนผสม\n- นำพริกหนุ่ม หอมแดง และกระเทียมย่างบนเตาเลยค่ะ เพื่อให้มีกลิ่นหอม\n- เมื่อย่างได้ที่แล้วพักไว้ให้เย็น นำมาปอกเปลือกออกให้หมดค่ะ\n \nSTEP 2 : โขลกน้ำพริก\n- นำพริกหนุ่ม หอมแดง และกระเทียม ที่ปอกเปลือกเรียบร้อยแล้ว นำมาโขลกให้เป็นเนื้อเดียวกัน\n \nSTEP 3 : ปรุงรสและจัดเสิร์ฟ\n- เมื่อโขลกส่วนผสมจนเข้าที่แล้ว ทำการปรุงรสด้วย น้ำตาล น้ำปลา และเกลือ โขลกต่อให้เครื่องปรุงรสเข้ากันดีค่ะ\n- เมื่อส่วนผสมทุกอย่างเข้ากันดีแล้ว ตักขึ้นเสิร์ฟพร้อมแคปหมู เครื่องเคียง ผักตามชอบได้เลยค่ะ'
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
          material: '- น่องไก่ 3 น่องใหญ่ \n- น้ำพริกข้าวซอย 100 กรัม \n- กะทิ 500 กรัม \n- เส้นข้าวซอยหรือเส้นหมี่ไข่อิสลาม 100 กรัม \n- น้ำมันพืช 3 ถ้วยตวง \n- น้ำปลา 3 ช้อนโต๊ะ \n- เกลือ 2 ช้อนชา \n- น้ำตาลมะพร้าว 1.5 ช้อนโต๊ะ \n- พริกผัด 1 ช้อนโต๊ะ \n- น้ำสะอาด 1.5 ลิตร \n- หอมแขกซอย \n- ผักกาดดองซอย \n- ต้นหอมผักชี',
          ingredients: [
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/น่องไก่.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/น้ำพริก.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/กะทิ.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/เส้น.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/น้ำมัน.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/น้ำปลา.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/เกลือ.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/น้ำตาลมะพร้าว.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/พริกผัด.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/น้ำ.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/หอมแดง.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/ผักกาด.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_ข้าวซอยไก่/ต้นหอม.jpg'),
          ],
          FoodList: 'STEP 1: ปรุงน้ำข้าวซอย\n- ตั้งหม้อหรือกระทะใบใหญ่ให้ร้อน ใส่กะทิลงไปเคี่ยวสักพัก ตามด้วยเครื่องแกง จากนั้นเคี่ยวจนกะทิให้แตกมัน\n- ใส่น่องไก่ลงไปผัดให้เข้ากับกะทิ แล้วเติมกะทิลงไปจนหมด เคี่ยวต่อให้ไก่เปื่อย สัก 30-40 นาที\n \nSTEP 2: ลวกเส้น + ทอดเส้นข้าวซอย\n- ลวกเส้นข้าวซอยให้นุ่มก่อนนำไปทอดค่ะ โดยเราจะนำไปลวกในน้ำเดือด โดยใช้เวลาประมาณ 8 นาที\n- โดยแบ่งเส้นข้าวซอยที่ลวกแล้วสัก 2 หยิบมือ ผึ่งให้แห้งแล้วนำลงทอดในน้ำมันปาล์มเดือด ๆ สักพักให้กรอบ แล้วตักขึ้นพักไว้ค่ะ\n \nSTEP 3 : จัดเสิร์ฟ\n- ตักเส้นข้าวซอยลวกลงในชาม แล้วตักน้ำข้าวซอย พร้อมน่องไก่ราดลงไป\n- ตกแต่งด้วยข้าวซอยทอดและต้นหอมผักชีซอย ทานพร้อมพริกผัด หอมแดงซอย และผักกาดดอง'
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
          material: '- เนื้อสันคอหมูหั่นเต๋า 300 กรัม \n- เนื้อหมูสามชั้นหั่นเต๋า 200 กรัม \n- น้ำตาลทราย \n- น้ำมะขามเปียก 3 ช้อนโต๊ะ \n- ขิงซอย 1/2 ถ้วย \n- กระเทียม 1/2 ถ้วย \n- ถั่วลิสงคั่ว 2 ช้อนโต๊ะ \n- สับปะรด 2 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารเหนือ/ส่วนผสม_แกงฮังเล/สันคอ.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_แกงฮังเล/สามชั้น.png'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_แกงฮังเล/น้ำตาล.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_แกงฮังเล/มะขาม.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_แกงฮังเล/ขิง.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_แกงฮังเล/กระเทียม.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_แกงฮังเล/ถั่ว.jpg'),
            require('../database/images/อาหารเหนือ/ส่วนผสม_แกงฮังเล/สัปปะรด.jpg'),
          ],
          FoodList: 'STEP 1 : ตำพริกแกง\n- นำพริกแห้ง ข่าซอย กระเทียม ตะไคร้ซอย หอมแดง และเกลือ โขลกรวมกันให้ละเอียด หลังจากนั้นใส่กะปิหยาบลงไป โขลกให้ทุกอย่างเข้ากัน ตักขึ้นพักไว้\n \nSTEP 2 : หมักหมู\n- นำพริกแกงที่ขโลกไว้มาผสมกับสับปะรด เนื้อสันคอหมูหั่นเต๋า และเนื้อหมูสามชั้นหั่นเต๋า คลุกเคล้าให้เข้ากัน หมักประมาณ 1 ชั่วโมง\n \nSTEP 3 : ปรุงแกงฮังเล \n- นำหมูที่หมักไว้มาตั้งไฟ ใส่น้ำเล็กน้อย ผัดต่อจนหมูเริ่มสุก คอยเติมน้ำเรื่อยๆ เคี่ยวต่อจนหมูเปื่อยได้ที่ \n- ปรุงรสด้วยน้ำมะขามเปียก หลังจากนั้นใส่กระเทียม และขิงซอย คนให้ทุกอย่างเข้ากัน เคี่ยวต่ออีกสักครู่ \n- สุดท้ายใส่ถั่วลิสงคั่ว ปล่อยให้เดือดต่ออีก 15 นาที ตักแกงฮังเลเสิร์ฟได้เลยจ้า!'
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
          material: '- เนื้อสันคอ 500 กรัม \n- น้ำมันหอย 2 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/สันคอ.jpg'),
          ],
          FoodList: 'STEP 1 : หมักคอหมู\n- นำคอหมูมาจิ้มด้วยส้อมให้ทั่ว ก่อนนำไปหมัก'
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
          material: '- เนื้อสันคอ 500 กรัม \n- น้ำมันหอย 2 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/สันคอ.jpg'),
          ],
          FoodList: 'STEP 1 : หมักคอหมู\n- นำคอหมูมาจิ้มด้วยส้อมให้ทั่ว ก่อนนำไปหมัก'
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
          material: '- เนื้อสันคอ 500 กรัม \n- น้ำมันหอย 2 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/สันคอ.jpg'),
          ],
          FoodList: 'STEP 1 : หมักคอหมู\n- นำคอหมูมาจิ้มด้วยส้อมให้ทั่ว ก่อนนำไปหมัก'
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
          material: '- เนื้อสันคอ 500 กรัม \n- น้ำมันหอย 2 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/สันคอ.jpg'),
          ],
          FoodList: 'STEP 1 : หมักคอหมู\n- นำคอหมูมาจิ้มด้วยส้อมให้ทั่ว ก่อนนำไปหมัก'
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
          material: '- เนื้อสันคอ 500 กรัม \n- น้ำมันหอย 2 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/สันคอ.jpg'),
          ],
          FoodList: 'STEP 1 : หมักคอหมู\n- นำคอหมูมาจิ้มด้วยส้อมให้ทั่ว ก่อนนำไปหมัก'
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
          material: '- เนื้อสันคอ 500 กรัม \n- น้ำมันหอย 2 ช้อนโต๊ะ',
          ingredients: [
            require('../database/images/อาหารอีสาน/ส่วนผสม_คอหมูย่าง/สันคอ.jpg'),
          ],
          FoodList: 'STEP 1 : หมักคอหมู\n- นำคอหมูมาจิ้มด้วยส้อมให้ทั่ว ก่อนนำไปหมัก'
        },
      ],
    },
  ];