/**
 * let cooker= {
           "name": "李大嘴",
           "lv": 1,
           "talent": {
               "id": 1,
               "name": "吝啬鬼",
               "describe": "买菜九八折"
           },
           "attribute": [
               {"steam": 16},
               {"fry": 18},
               {"cut": 12},
               {"boil": 22},
               {"noodles": 14},
           ],
           "foodlist": [
               {
                   "id": 1,
                   "name": "西红柿炒蛋",
                   "value":1.6,
               }
           ]
       };
 */
export default class CookerBean {

    bindData(json){
      this.data=JSON.parse(json);
    }

    
}