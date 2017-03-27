## 0 signin/signup

 * 0.1 POST /signin: 
   * params:username;password
   * return:0/1/2

 * 0.2 POST /signup:
   * params:useraccount;password;
   * return:0/1/2

## 1 fixedLooking

 * 1.1 GET /getLocation
   * gps 

 * 1.2 GET /listFoodCommentByLocalAndCondition
   * params:local;
   * return:FoodCommentList

 * 1.3 GET /listUserCollectionAndCondition
   * params:useraccount
   * return:userCollection

 * 1.4 GET /viewFoodCommentImg/#foodCommentId/#imgID
   * params:foodCommentID;imgID
   * return:img

 * 1.5 GET /listFCComment/#foodComentID
   * params:foodCommentID
   * return:thisFCcommentList
   * direct to 「食评详情」页,显示comments和评论输入框 

 * 1.6 GET /selectLocation
   * return:0/1/2
   * direct to 「地点切换」

 * 1.7 GET /foodCirtic/#useraccount
   * params:useraccount
   * return:0/1/2
   * direct to 「美食家详情」页

 * 1.8 GET /shop/#shopID
   * params:shopId
   * return:0/1/2   
   * direct to 「店铺详情」页

 * 1.9 GET /foodComment/#socialID
   * params:socialID
   * return:0/1/2
   * direct to「食评详情」页

 * 1.10 POST /postComment/#socialID
   * params:COMMENT
   * return:0/1/2

 * 1.11 GET /like/#socialID
   * params:socialID;user
   * return:0/1/2

 * 1.12 GET /collect/#socialID
   * params:socialID;user
   * return:0/1/2

 * 1.13 GET /listLike/#socialID
   * params:socialID
   * return:likeList

 * 1.14 GET /listComment/#socialID
   * params:socialID
   * return:commentList

## 2 Looking
 
 * 2.1 GET /listLookingByLocalAndCondition
   * params:local
   * return:Looking

 * 2.2 GET /looking/#socialID
   * params:socialId
   * direct to「寻食详情」页

 * 2.3 POST /beAVendor/#socialID/USER(temporary)
   * params:socialId;USER
   * return:0/1/2

 * 1.10; 1.11; 1.12; 1.13; 1.14

## 3 Post
 
 * 3.1 POST /postLooking/LOOKING
   * params:LOOKING
   * return:0/1/2

 * 3.2 POST /postFoodComment/FOODCOMMENT
   * params:FOODCOMMENT
   * return:0/1/2

 * 3.3 POST /postInviting/INVITING
   * params:INVITING
   * return:0/1/2

## 4 Track
  
 * 4.1 GET /listMyFC/#userid
   * params:userid
   * return:myFCList

 * 4.2 GET /listMyLooking/#userid
   * params:userid
   * return:myLookingList

 * 4.3 GET /listMyPC/#userid
   * params:userid
   * return:myPCList
  
 * 4.4 GET /listMyLike/#userid
   * params:userid
   * return:myLikeList

 * 1.14

## 5 Personal

 * 5.1 GET /myInfo/#userid
   * params:userid
   * return:USER

 * 5.2 GET /myCollection/#userid
   * params:userid
   * return:myCollectionList

 * 5.3 PUT /updateMyInfo/#userid
   * params:USER
   * return:0/1/2
