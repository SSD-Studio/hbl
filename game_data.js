game.data = {"font":{"family":"Arial","height":20,"leading":1,"size":"18px"},"height":480,"pauseScreen":{"scenes":[{"actions":[{"nameEditable":true,"sync":true,"type":"Wait","waitType":"Forever"}],"backgroundColor":[242,242,242,255],"name":"Main","nameEditable":true,"objects":[{"onMouseRelease":[{"comment":"Resume Game","nameEditable":true,"script":"var game = this.getGame();\nif (game)\n\tgame.resume();","sync":true,"type":"RunScript"}],"resource":"Button","text":"계속하기","x":240,"y":148},{"name":"Button1","onMouseMove":[{"color":[255,255,255,255],"colorChangeEnabled":true,"image":null,"imageChangeEnabled":false,"nameEditable":true,"object":"Button1","opacity":255,"opacityChangeEnabled":false,"sync":true,"targetParent":true,"type":"ChangeObjectBackground"}],"onMouseRelease":[{"metaTarget":1,"nameEditable":true,"sync":true,"target":"Save Game","type":"GoToScene"}],"resource":"Button","text":"저장하기","x":240,"y":202},{"name":"Button2","onMouseMove":[{"color":[255,255,255,255],"colorChangeEnabled":true,"image":null,"imageChangeEnabled":false,"nameEditable":true,"object":"Button2","opacity":255,"opacityChangeEnabled":false,"sync":true,"targetParent":true,"type":"ChangeObjectBackground"}],"onMouseRelease":[{"metaTarget":1,"nameEditable":true,"sync":true,"target":"Load Game","type":"GoToScene"}],"resource":"Button","text":"불러오기","x":240,"y":255}],"sync":true,"type":"Scene"},{"actions":[{"nameEditable":true,"sync":true,"type":"Wait","waitType":"Forever"}],"backgroundColor":[242,242,242,255],"name":"Save Game","nameEditable":true,"objects":[{"alignEnabled":false,"name":"SlotButton7","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":325},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":325}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":7,"slotType":0,"thumbnailEnabled":true,"x":331,"y":318},{"alignEnabled":false,"name":"SlotButton6","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":325},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":325}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":6,"slotType":0,"thumbnailEnabled":true,"x":38,"y":318},{"alignEnabled":false,"name":"SlotButton5","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":242},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":242}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":5,"slotType":0,"thumbnailEnabled":true,"x":331,"y":235},{"alignEnabled":false,"name":"SlotButton4","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":242},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":242}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":4,"slotType":0,"thumbnailEnabled":true,"x":38,"y":235},{"alignEnabled":false,"name":"SlotButton3","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":161},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":161}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":3,"slotType":0,"thumbnailEnabled":true,"x":331,"y":154},{"alignEnabled":false,"name":"SlotButton2","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":161},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":161}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":2,"slotType":0,"thumbnailEnabled":true,"x":38,"y":154},{"alignEnabled":false,"name":"SlotButton1","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":79},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":79}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":1,"slotType":0,"thumbnailEnabled":true,"x":331,"y":72},{"alignEnabled":false,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":79},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":79}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":0,"slotType":0,"thumbnailEnabled":true,"x":38,"y":72},{"resource":"TitleBox","text":"Save Game","x":249,"y":18},{"resource":"BackButton","x":18,"y":430}],"sync":true,"type":"Scene"},{"actions":[{"nameEditable":true,"sync":true,"type":"Wait","waitType":"Forever"}],"backgroundColor":[242,242,242,255],"name":"Load Game","nameEditable":true,"objects":[{"alignEnabled":false,"name":"SlotButton7","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":79},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":79}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":0,"slotType":1,"thumbnailEnabled":true,"x":38,"y":72},{"alignEnabled":false,"name":"SlotButton6","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":161},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":161}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":3,"slotType":1,"thumbnailEnabled":true,"x":331,"y":154},{"alignEnabled":false,"name":"SlotButton5","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":242},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":242}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":4,"slotType":1,"thumbnailEnabled":true,"x":38,"y":235},{"alignEnabled":false,"name":"SlotButton4","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":161},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":161}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":2,"slotType":1,"thumbnailEnabled":true,"x":38,"y":154},{"alignEnabled":false,"name":"SlotButton3","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":50,"y":325},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":112,"y":325}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":6,"slotType":1,"thumbnailEnabled":true,"x":38,"y":318},{"alignEnabled":false,"name":"SlotButton2","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":79},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":79}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":1,"slotType":1,"thumbnailEnabled":true,"x":331,"y":72},{"alignEnabled":false,"name":"SlotButton1","objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":325},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":325}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":7,"slotType":1,"thumbnailEnabled":true,"x":331,"y":318},{"alignEnabled":false,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":343,"y":242},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":405,"y":242}],"objectsSynced":false,"resizeToContentsEnabled":false,"resource":"SlotButton","slot":5,"slotType":1,"thumbnailEnabled":true,"x":331,"y":235},{"resource":"TitleBox","text":"Load Game","x":249,"y":18},{"resource":"BackButton","x":18,"y":430}],"sync":true,"type":"Scene"}]},"resources":{"BackButton":{"backgroundColor":[220,220,220,255],"backgroundOpacity":255,"borderColor":[204,204,204,255],"borderWidth":1,"cornerRadius":10,"font":{"family":"Roboto","height":21,"size":"18px","style":"normal","weight":"normal"},"height":34,"keepAspectRatio":false,"name":"BackButton","nameEditable":true,"onMouseMove":[{"color":[255,255,255,255],"colorChangeEnabled":true,"image":null,"imageChangeEnabled":false,"nameEditable":true,"object":"BackButton","opacity":255,"opacityChangeEnabled":false,"sync":true,"targetParent":true,"type":"ChangeObjectBackground"}],"onMouseRelease":[{"metaTarget":4,"nameEditable":true,"sync":true,"type":"GoToScene"}],"opacity":255,"sync":true,"text":"Back","textAlignment":"HCenter|VCenter","textColor":[14,14,14,255],"type":"Button","visible":true,"width":87,"x":486,"y":292},"Button":{"backgroundColor":[220,220,220,255],"backgroundOpacity":255,"borderColor":[204,204,204,255],"borderWidth":1,"cornerRadius":10,"font":{"family":"Roboto","height":21,"size":"18px","style":"normal","weight":"normal"},"height":34,"keepAspectRatio":false,"name":"Button","nameEditable":true,"onMouseMove":[{"color":[255,255,255,255],"colorChangeEnabled":true,"image":null,"imageChangeEnabled":false,"nameEditable":true,"object":"Button","opacity":255,"opacityChangeEnabled":false,"sync":true,"targetParent":true,"type":"ChangeObjectBackground"}],"opacity":255,"sync":true,"text":"Button","textAlignment":"HCenter|VCenter","textColor":[14,14,14,255],"type":"Button","visible":true,"width":160,"x":449,"y":292},"DialogueBox":{"alignEnabled":true,"backgroundColor":[254,204,102,191],"backgroundOpacity":191,"cornerRadius":2,"height":190,"keepAspectRatio":false,"name":"DialogueBox","nameEditable":true,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":20,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":30,"keepAspectRatio":false,"name":"speakerTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":70,"y":120},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":20,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":160,"keepAspectRatio":false,"name":"dialogueTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":70,"y":150}],"objectsSynced":false,"opacity":255,"resizeToContentsEnabled":true,"sync":true,"type":"DialogueBox","visible":true,"width":640,"x":70,"y":120},"Roboto - Bold":{"asset":"asset2","name":"Roboto - Bold","nameEditable":true,"sync":true,"type":"Font"},"Roboto - Regular":{"asset":"asset1","name":"Roboto - Regular","nameEditable":true,"sync":true,"type":"Font"},"SlotButton":{"alignEnabled":false,"backgroundColor":[],"backgroundOpacity":255,"borderColor":[0,0,0,255],"borderWidth":1,"cornerRadius":2,"height":66,"keepAspectRatio":false,"name":"SlotButton","nameEditable":true,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"height":50,"keepAspectRatio":false,"name":"thumbnail","nameEditable":false,"opacity":255,"sync":true,"type":"Image","visible":true,"width":50,"x":406,"y":284},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":19,"size":"16px","style":"normal","weight":"normal"},"height":50,"keepAspectRatio":false,"name":"textbox","nameEditable":false,"opacity":255,"sync":true,"text":"$id. Empty Slot","textAlignment":"Left|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":197,"x":468,"y":284}],"objectsSynced":false,"opacity":255,"resizeToContentsEnabled":false,"slot":0,"slotType":0,"sync":true,"thumbnailEnabled":true,"type":"SlotButton","visible":true,"width":271,"x":394,"y":277},"TitleBox":{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Roboto","height":28,"size":"24px","style":"normal","weight":"normal"},"height":42,"keepAspectRatio":false,"name":"TitleBox","nameEditable":true,"opacity":255,"sync":true,"text":"","textAlignment":"HCenter|VCenter","textColor":[14,14,14,255],"type":"TextBox","visible":true,"width":143,"x":458,"y":289},"깜짱운":{"backgroundColor":[],"backgroundOpacity":255,"height":293,"keepAspectRatio":true,"name":"깜짱운","nameColor":[255,255,255,255],"nameEditable":true,"opacity":255,"state":"1","states":{"1":"1596284631682.png"},"sync":true,"textColor":[255,255,255,255],"type":"Character","visible":true,"width":195,"x":79,"y":78},"박미러":{"backgroundColor":[252,2,255,255],"backgroundOpacity":255,"font":{"family":"Arial","height":33,"leading":1,"size":"30px","style":"normal","weight":"normal"},"height":36,"keepAspectRatio":false,"name":"박미러","nameEditable":true,"opacity":255,"sync":true,"text":"박 미러\n","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":47,"y":151},"박정영":{"backgroundColor":[],"backgroundOpacity":255,"height":206,"keepAspectRatio":true,"name":"박정영","nameColor":[255,255,255,255],"nameEditable":true,"opacity":255,"state":"1","states":{"1":"20200726_161212.jpg"},"sync":true,"textColor":[255,255,255,255],"type":"Character","visible":true,"width":366,"x":20,"y":20}},"scenes":[{"actions":[{"nameEditable":true,"sync":true,"type":"Wait","waitType":"Forever"}],"backgroundColor":[242,242,242,255],"backgroundImage":"20200801_180406.jpg","name":"Main","nameEditable":true,"objects":[{"onMouseRelease":[{"metaTarget":2,"nameEditable":true,"sync":true,"type":"GoToScene"}],"resource":"Button","text":"게임 시작","x":240,"y":191},{"name":"Button1","onMouseMove":[{"color":[255,255,255,255],"colorChangeEnabled":true,"image":null,"imageChangeEnabled":false,"nameEditable":true,"object":"Button1","opacity":255,"opacityChangeEnabled":false,"sync":true,"targetParent":true,"type":"ChangeObjectBackground"}],"onMouseRelease":[{"comment":"Go To Load Game screen","nameEditable":true,"script":"var game = this.getGame();\nif (game) {\n\tgame.pause();\n\tgame.getModel().setScene(\"Load Game\");\n}","sync":true,"type":"RunScript"}],"resource":"Button","text":"게임 로딩","x":240,"y":254},{"resource":"박미러","text":"박 미러 온라인\n","x":3,"y":0}],"sync":true,"type":"Scene"},{"actions":[{"nameEditable":true,"object":"박정영","sync":true,"transitions":[],"type":"Hide"},{"nameEditable":true,"object":"깜짱운","sync":true,"transitions":[],"type":"Hide"},{"character":"박정영","name":"YoungJungPark","nameEditable":true,"object":"DialogueBox","sync":true,"text":"어이어이 당신은 누구신가.... 혹시 내 섹파?","type":"Dialogue","wait":{"nameEditable":true,"sync":true,"type":"Wait","waitType":"MouseClick"}},{"character":"박정영","nameEditable":true,"object":"DialogueBox","sync":true,"text":"그렇다면... 혹시 나와 사귀지 않겠는가?\n","type":"Dialogue","wait":{"nameEditable":true,"sync":true,"type":"Wait","waitType":"MouseClick"}},{"nameEditable":true,"object":"박정영","state":"1","sync":true,"transitions":[{"destX":"center","destY":"top","duration":2,"nameEditable":true,"object":"박정영","slideType":"in","sync":true,"type":"Slide"}],"type":"Show"},{"character":"깜짱운","nameEditable":true,"object":"DialogueBox","sync":true,"text":"잠깐!!!!!!!!!!!!","type":"Dialogue","wait":{"nameEditable":true,"sync":true,"type":"Wait","waitType":"MouseClick"}},{"nameEditable":true,"object":"깜짱운","state":"1","sync":true,"transitions":[{"destX":"left","destY":"top","duration":2,"nameEditable":true,"object":"깜짱운","slideType":"in","sync":true,"type":"Slide"}],"type":"Show"},{"character":"깜짱운","nameEditable":true,"object":"DialogueBox","sync":true,"text":"오이오이 박정영짱... 나를 버리고 다른 남자랑 만나는 고얌?\nBOY?","type":"Dialogue","wait":{"nameEditable":true,"sync":true,"type":"Wait","waitType":"MouseClick"}}],"backgroundImage":"복도.png","name":"1","nameEditable":true,"objects":[{"resource":"깜짱운","x":562,"y":35},{"resource":"박정영","x":1,"y":50},{"alignEnabled":true,"objects":[{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":20,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":30,"keepAspectRatio":false,"name":"speakerTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":0,"y":331},{"backgroundColor":[],"backgroundOpacity":255,"font":{"family":"Arial","height":20,"leading":1,"size":"18px","style":"normal","weight":"normal"},"height":160,"keepAspectRatio":false,"name":"dialogueTextBox","nameEditable":false,"opacity":255,"sync":true,"text":"","textAlignment":"Left|Top","textColor":[0,0,0,255],"type":"TextBox","visible":true,"width":640,"x":0,"y":361}],"objectsSynced":false,"resizeToContentsEnabled":true,"resource":"DialogueBox","x":0,"y":331}],"sync":true,"type":"Scene"}],"textSpeed":50,"title":"Parkmirror","version":1792,"width":640}