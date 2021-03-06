/**제가 만든건 아니고

​

https://cafe.naver.com/nameyee/20280

​

이거 개조한겁니다. 문제되면 글 내리겠습니다.

​**/

/***준비물***

1.루팅된 휴대폰

2.메신저봇R

3.오류를 보아도 맨붕하지 않을 맨탈

***********/

/*소스코드*/

const scriptName = "자신의 스크립트명";
const talk_package_Name = "자신의 카카오톡 패키지명";//com.kakao.talk이나 com.kakao.tall 일껍니다
const DB_update_Time = 1000;//1000 == 1초

const Context = android.content.Context;
const SQLiteDatabase = android.database.sqlite.SQLiteDatabase;
const DatabaseUtils = android.database.DatabaseUtils;
const PowerManager = android.os.PowerManager;
const Base64 = android.util.Base64;
const ProcessBuilder = java.lang.ProcessBuilder;
const Process = java.lang.Process;
const InputStreamReader = java.io.InputStreamReader;
const OutputStreamReader = java.io.OutputStreamReader;
const BufferedReader = java.io.BufferedReader;
const ArrayList = java.util.ArrayList;
const _Array = java.lang.reflect.Array;
const _Byte = java.lang.Byte;
const _Integer = java.lang.Integer;
const Runtime = java.lang.Runtime;
const _String = java.lang.String;
const Timer = java.util.Timer;
const TimerTask = java.util.TimerTask;
const Cipher = javax.crypto.Cipher;
const IvParameterSpec = javax.crypto.spec.IvParameterSpec;
const System = java.lang.System;
const PBEKeySpec = javax.crypto.spec.PBEKeySpec;
const SecretKeyFactory = javax.crypto.SecretKeyFactory;
const SecretKeySpec = javax.crypto.spec.SecretKeySpec;
const JSONObject = org.json.JSONObject;
//const MY_KEY = "123456789";//KakaoTalk2.db->open_profile->user_id
Runtime.getRuntime().exec("su -c \"\"chmod -R 777 /data/data/"+talk_package_Name).waitFor();
/*let pm = Api.getContext().getSystemService(Context.POWER_SERVICE);
let wakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, scriptName);
wakeLock.acquire();*/

let db = SQLiteDatabase.openDatabase("/data/data/"+talk_package_Name+"/databases/KakaoTalk.db", null, 0);
let db2 = SQLiteDatabase.openDatabase("/data/data/"+talk_package_Name+"/databases/KakaoTalk2.db", null, 0);

const dream_arr1 = ["adrp.ldrsh.ldnp", "ldpsw", "umax", "stnp.rsubhn", "sqdmlsl", "uqrshl.csel", "sqshlu", "umin.usubl.umlsl", "cbnz.adds", "tbnz", "usubl2", "stxr", "sbfx", "strh", "stxrb.adcs", "stxrh", "ands.urhadd", "subs", "sbcs", "fnmadd.ldxrb.saddl", "stur", "ldrsb", "strb", "prfm", "ubfiz", "ldrsw.madd.msub.sturb.ldursb", "ldrb", "b.eq", "ldur.sbfiz", "extr", "fmadd", "uqadd", "sshr.uzp1.sttrb", "umlsl2", "rsubhn2.ldrh.uqsub", "uqshl", "uabd", "ursra", "usubw", "uaddl2", "b.gt", "b.lt", "sqshl", "bics", "smin.ubfx", "smlsl2", "uabdl2", "zip2.ssubw2", "ccmp", "sqdmlal", "b.al", "smax.ldurh.uhsub", "fcvtxn2", "b.pl"], dream_arr2 = ["saddl", "urhadd", "ubfiz.sqdmlsl.tbnz.stnp", "smin", "strh", "ccmp", "usubl", "umlsl", "uzp1", "sbfx", "b.eq", "zip2.prfm.strb", "msub", "b.pl", "csel", "stxrh.ldxrb", "uqrshl.ldrh", "cbnz", "ursra", "sshr.ubfx.ldur.ldnp", "fcvtxn2", "usubl2", "uaddl2", "b.al", "ssubw2", "umax", "b.lt", "adrp.sturb", "extr", "uqshl", "smax", "uqsub.sqshlu", "ands", "madd", "umin", "b.gt", "uabdl2", "ldrsb.ldpsw.rsubhn", "uqadd", "sttrb", "stxr", "adds", "rsubhn2.umlsl2", "sbcs.fmadd", "usubw", "sqshl", "stur.ldrsh.smlsl2", "ldrsw", "fnmadd", "stxrb.sbfiz", "adcs", "bics.ldrb", "ldursb", "subs.uhsub", "ldurh", "uabd", "sqdmlal"];
function dream(param) {
  return dream_arr1[param % 54] + "." + dream_arr2[(param + 31) % 57];
}
/* END */
function toByteArray(bytes) {
  let res = _Array.newInstance(_Byte.TYPE, bytes.length);
  for (var i = 0; i < bytes.length; i++) {
    res[i] = new _Integer(bytes[i]).byteValue();
  }
  return res;
}
function toCharArray(chars) {
  return new _String(chars.map((e) => String.fromCharCode(e)).join("")).toCharArray();
}
function decrypt(userId, enc, text) {
  if (text == null)
    return null;
  try {
    let iv = toByteArray([15, 8, 1, 0, 25, 71, 37, -36, 21, -11, 23, -32, -31, 21, 12, 53]);
    let password = toCharArray([22, 8, 9, 111, 2, 23, 43, 8, 33, 33, 10, 16, 3, 3, 7, 6]);
    let prefixes = ["", "", "12", "24", "18", "30", "36", "12", "48", "7", "35", "40", "17", "23", "29", "isabel", "kale", "sulli", "van", "merry", "kyle", "james", "maddux", "tony", "hayden", "paul", "elijah", "dorothy", "sally", "bran", dream(0xcad63)];
    let salt = new _String((prefixes[enc] + userId).slice(0, 16).padEnd(16, "\x00")).getBytes("UTF-8");
    let secretKeySpec = new SecretKeySpec(SecretKeyFactory.getInstance("PBEWITHSHAAND256BITAES-CBC-BC").generateSecret(new PBEKeySpec(password, salt, 2, 256)).getEncoded(), "AES");
    let ivParameterSpec = new IvParameterSpec(iv);
    let cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(2, secretKeySpec, ivParameterSpec);
    return String(new _String(cipher.doFinal(Base64.decode(text, 0)), "UTF-8"));
  }  catch (e) {
  Log.error(e.lineNumber + ": " + e);
  return null;
}
}
function getRecentChatData(count) {
  try {
    let cursor = db.rawQuery("SELECT * FROM chat_logs", null);
    cursor.moveToLast();
    let data = [];
    while (count--) {
      let obj = {};
      let columns = ["_id", "id", "type", "chat_id", "user_id", "message", "attachment", "created_at", "deleted_at", "client_message_id", "prev_id", "referer", "supplement", "v"];
      for (let i = 0; i < columns.length; i++) {
        obj[columns[i]] = cursor.getString(i);
        if (columns[i] == "v") {
          obj.v = JSON.parse(obj.v);
        }
      }
      data.push(obj);
      cursor.moveToPrevious();
    }
    cursor.close();
    return data;
  }  catch (e) {
  Log.error(e.lineNumber + ": " + e);
  return null;
}
}
function getRoomName(chat_id) {
  try {
    let room = "";
    let cursor = db.rawQuery("SELECT link_id FROM chat_rooms WHERE id=" + chat_id, null);
    cursor.moveToNext();
    let link_id = cursor.getString(0);
    cursor.close();
    if (link_id != null) {
      let cursor2 = db2.rawQuery("SELECT name FROM open_link WHERE id=" + link_id, null);
      cursor2.moveToNext();
      room = cursor2.getString(0);
      cursor2.close();
    } else {
      return null;
    }
    return room;
  }  catch (e) {
  Log.error(e.lineNumber + ": " + e);
  return null;
}
}
function getUserInfo(user_id, info) {
  try {
    let cursor = db2.rawQuery("SELECT * FROM friends WHERE id=" + user_id, null);
    cursor.moveToNext();
    let data = {};
    let columns = ["_id", "contact_id", "id", "type", "uuid", "phone_number", "raw_phone_number", "name", "phonetic_name", "profle_image_url", "full_profile_image_url", "original_profile_image_url", "status_message", "chat_id", "brand_new", "blocked", "favorite", "position", "v", "board_v", "ext", "nick_name", "user_type", "story_user_id", "accout_id", "linked_services", "hidden", "purged", "suspended", "member_type", "involved_chat_ids", "contact_name", "enc", "created_at", "new_badge_updated_at", "new_badge_seen_at", "status_action_token"];
    for (let i = 0; i < columns.length; i++) {
      data[columns[i]] = cursor.getString(i);
    }
    cursor.close();
    switch (info) {
      case "_id":
        return data._id;
      case "contact_id":
        return data.contact_id;
      case "id":
        return data.id;
      case "type":
        return data.type;
      case "uuid":
        return data.uuid;
      case "phone_number":
        return data.phone_number;
      case "raw_phone_number":
        return data.raw_phone_number;
      case "name":
        return decrypt(MY_KEY, data.enc, data.name);
      case "phonetic_name":
        return data.phonetic_name;
      case "profle_image_url":
        return decrypt(MY_KEY, data.enc, data.profle_image_url);
      case "full_profile_image_url":
        return decrypt(MY_KEY, data.enc, data.full_profile_image_url);
      case "original_profile_image_url":
        return decrypt(MY_KEY, data.enc, data.original_profile_image_url);
      case "status_message":
        return decrypt(MY_KEY, data.enc, data.status_message);
      case "chat_id":
        return data.chat_id;
      case "brand_new":
        return data.brand_new;
      case "blocked":
        return data.blocked;
      case "favorite":
        return data.favorite;
      case "position":
        return data.position;
      case "v":
        return decrypt(MY_KEY, data.enc, data.v);
      case "board_v":
        return data.board_v;
      case "ext":
        return data.ext;
      case "nick_name":
        return data.nick_name;
      case "user_type":
        return data.user_type;
      case "story_user_id":
        return data.story_user_id;
      case "accout_id":
        return data.accout_id;
      case "linked_services":
        return data.linked_services;
      case "hidden":
        return data.hidden;
      case "purged":
        return data.purged;
      case "suspended":
        return data.suspended;
      case "member_type":
        return data.member_type;
      case "involved_chat_ids":
        return data.involved_chat_ids;
      case "contact_name":
        return decrypt(MY_KEY, data.enc, data.contact_name);
      case "enc":
        return data.enc;
      case "created_at":
        return data.created_at;
      case "new_badge_updated_at":
        return data.new_badge_updated_at;
      case "new_badge_seen_at":
        return data.new_badge_seen_at;
      case "status_action_token":
        return data.status_action_token;
      default:
        throw "requsted Unknown info";
    }
  }  catch (e) {
  Log.error(e.lineNumber + ": " + e);
  return null;
}
}
function DatabaseWatcher() {
  this.looper = null;
  this.pre = null;
}
DatabaseWatcher.prototype = {
  start: function() {
  if (this.looper == null) {
    Log.debug("looper is null");
    this.looper = new Timer();
    this.looper.scheduleAtFixedRate(new TimerTask({
  run: function() {
  try {
    if (!Api.isOn(scriptName)) {
      watcher.stop();
      return;
    }
      let count = DatabaseUtils.queryNumEntries(db, "chat_logs", null);
      if (this.pre == null) {
        Log.d("정상적으로 작동중 입니다.");
        this.pre = count;
      } else {
        let change = count - this.pre;
        this.pre = count;
        if (change > 0) {
          let stack = getRecentChatData(change);
          while (stack.length > 0) {
            let obj = stack.pop();
            obj.message = decrypt(obj.user_id, obj.v.enc, obj.message);
            Log.d(obj.message);
            let room = getRoomName(obj.chat_id);
            let send_username = getUserInfo(obj.user_id, "name");
            if (send_username == null)
              send_username = "";
            else if (obj.v.origin == "KICKMEM")
              send_username = send_username + "님이 ";
            else
              send_username = send_username + "님 ";
            if (obj.v.origin == "NEWMEM")
              Api.replyRoom(room, " 입퇴장\n"+send_username + "안녕하세요! 공지에 있는 규칙 필독해주세요!");
            else if (obj.v.origin == "DELMEM" && JSONObject(obj.message).get("feedType") == 2)
              Api.replyRoom(room, " 입퇴장\n"+send_username + "안녕히가세요!");
            else if (obj.v.origin == "KICKMEM" || obj.v.origin == "DELMEM") {
              obj.message = new JSONObject(obj.message);
              let by = getUserInfo(obj.message.get("member").getString("userId"), "name");
              if (by == null)
                by = "";
              else
                by = by + "님을 ";
              if (by == "" && send_username == "")
                Api.replyRoom(room," 입퇴장\n"+ "다음부턴 착하게 사세요!");
              else
                Api.replyRoom(room, send_username + by + "강퇴하였습니다. 다음부턴 착하게 사세요!");
            } else if (obj.type == 26 && obj.message == "who") {
              obj.attachment = new JSONObject(decrypt(obj.user_id, obj.v.enc, obj.attachment));
              let userid = obj.attachment.getString("src_userId");
              Api.replyRoom(room, "이름: " + getUserInfo(userid, "name") + "\n프로필 사진: " + getUserInfo(userid, "original_profile_image_url") + "\n상태 메시지: " + getUserInfo(userid, "status_message"));
            } else if (obj.type == 26 && obj.message == "photolink") {
              obj.attachment = new JSONObject(decrypt(obj.user_id, obj.v.enc, obj.attachment));
              let chat_id = obj.attachment.get("src_logId");
              let cursor = db.rawQuery("SELECT * FROM chat_logs WHERE id=" + chat_id, null);
              cursor.moveToNext();
              let userId1 = cursor.getString(4), msg1 = cursor.getString(6);
              cursor.close();
              let photo = decrypt(userId1, getUserInfo(userId1, "enc"), msg1);
              photo = new JSONObject(photo);
              Api.replyRoom(room, "링크: " + photo.get("url"));

            }
          }
        }
      }
  }  catch (e) {
  Log.error(e.lineNumber + ": " + e);
}
}}), 0, DB_update_Time);
    return true;
  }
  return false;
},
  stop: function() {
  if (this.looper != null) {
    this.looper.cancel();
    this.looper = null;
    return true;
  }
  return false;
}};
let watcher = new DatabaseWatcher();
watcher.start();
function onStartCompile() {
  watcher.stop();
}
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg == "!bot-off") {
    replier.reply(scriptName + "을(를) 종료합니다.");
    watcher.stop();
    Api.off(scriptName);
  }
}
