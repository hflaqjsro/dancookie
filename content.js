        var num = 1;
        var q = {
            1: {"title": "Q. 동아리에 신입으로 들어가서 아는 사람이 아무도 없는 상황", "type": "EI", "A": "어색한건 못 참아 먼저 말 건다", "B": "존버가 답이야.. 말 걸어주길 기다린다.", "pro_num": "1/12"},
            2: {"title": "Q. 드디어 과제 끝! 이제 뭐하지?", "type": "EI", "A": "바로 술마시러 간다", "B": "오늘은 하루종일 못 봤던 드라마 정주행이다.", "pro_num": "2/12"},
            3: {"title": "Q. 소개팅을 나가서 이상형을 만난 당신", "type": "EI", "A": "주제를 던지면서 대화를 이끌어 나간다", "B": "말을 많이하기 보다는 상대방의 말을 들어준다", "pro_num": "3/12"},
            4: {"title": "Q. 소설을 끝까지 읽은 뒤 나는..", "type": "SN", "A": "아 다 읽었다", "B": "주인공이 어떻게 살아갔을지 상상해본다", "pro_num": "4/12"},
            5: {"title": "Q. 일을 할 때 나는", "type": "SN", "A": "매뉴얼이 있는 편을 선호한다", "B": "나만의 방식대로 매뉴얼을 만드는걸 선호한다", "pro_num": "5/12"},
            6: {"title": "Q. 술집 볼 때 1순위로 보는 요소는", "type": "SN", "A": "안주 퀄리티", "B": "분위기" , "pro_num": "6/12"},
            7: {"title": "Q. 친구와의 점심약속 메뉴 결정은 어떻게?", "type": "TF", "A": "오늘은 이거 무조건 먹어야돼. 메뉴는 내가 정한다", "B": "뭐 먹어야 되지...? 친구에게 선택권을 넘긴다", "pro_num": "7/12"},
            8: {"title": "Q. 조원이 자료조사는 해왔으나 제대로 준비를 안한 것 같다", "type": "TF", "A": "여기 여기 다시 자료조사해서 건네주세요.", "B": "그래도 하긴 했으니까... 내가 찾아서 보강하자", "pro_num": "8/12"},
            9: {"title": "Q. 친구의 이별 소식을 들은 당신", "type": "TF", "A": "왜 헤어졌어?", "B": "말할때까지 기다려준다", "pro_num": "9/12"},
            10: {"title": "Q. 시작도 안한 과제 마감일 3일전 친구로부터 놀자는 전화에", "type": "JP", "A": "기다려봐 과제부터 먼저 끝내고", "B": "내일의 나야 고생해라! 오늘의 나는 일단 놀게", "pro_num": "10/12"},
            11: {"title": "Q. 수강신청계획을 짜놓은 당신", "type": "JP", "A": "플랜 C까지 미리 계획해 놓았다", "B": "플랜 C란 없다. 하나의 시간표만 짜놨다", "pro_num": "11/12"},
            12: {"title": "Q. 나는 평소에 시험공부를..", "type": "JP", "A": "미리미리 복습까지 해놓는다", "B": "1주일 전부터 벼락치기!", "pro_num": "12/12"}
        }
        var result = {
            "INFP": {"animal": "단1", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "INFJ": {"animal": "단2", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "INTP": {"animal": "단3", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "INTJ": {"animal": "단4", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ISFP": {"animal": "단5", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ISFJ": {"animal": "단6", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ISTP": {"animal": "단7", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ISTJ": {"animal": "단8", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ENFP": {"animal": "단9", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ENFJ": {"animal": "단10", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ENTP": {"animal": "단10", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ENTJ": {"animal": "단11", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ESFP": {"animal": "단12", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ESFJ": {"animal": "단13", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ESTP": {"animal": "단14", "category":"당신의 유형은?", "explain": "하마 설명", "img": "./img/DAN01.png"},
            "ESTJ": {"animal": "'판도라의 상자'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"- 공부하러 대학교 온게 아니라 사실 놀러왔음<br><br>- 다른 사람 생일도 자기 생일처럼 좋아함. 깜짝 이벤트를 할 수 있기 때문임.<br><br>- 어색함이란 내 사전에 없음. 어제 처음 만난 사람도 다음날이면 짱친임. <br><br>- 시험은 미루고 미루다가 벼락치기함. <br><br>- 돈 쓴 기억은 없는데 통장 잔고는 맨날 텅 비어있음. <br><br>-  자기 얘기 하는 거 좋아해서 주변 사람들이 내 비밀 다 알고 있음. <br><br>- 술 자리에서 진지한 얘기 나오는거 못견딤.", "explain_03":"잘맞는", "img_03": "./img/DAN01.png", "explain_04":"안맞는", "img_04": "./img/DAN01.png"}
        }
        function start() {
            $(".start").hide();
            $(".question").show();
            next();
         }
         $("#A").click(function(){
             var type = $("#type").val();
             var preValue = $("#"+type).val();
             $("#"+type).val(parseInt(preValue)+1);
             next();
         });
         $("#B").click(function(){
             next();
         });
        function next() {
            if (num == 13){
                $(".question").hide();
                $(".result").show();
                var mbti = "";
                ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
                ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
                ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
                ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
                /*
                if($("#EI").val() < 2){
                    mbti = mbti + "I"
                } else {
                    mbti = mbti + "E"
                } */
                $("#img_01").attr("src",result[mbti]["img_01"]);
                $("#category").html(result[mbti]["category"]);
                $("#animal").html(result[mbti]["animal"]);
                $("#explain_01").html(result[mbti]["explain_01"]);
                $("#img_02").attr("src",result[mbti]["img_02"]);
                $("#explain_02").html(result[mbti]["explain_02"]);
                $("#img_03").attr("src",result[mbti]["img_03"]);
                $("#explain_03").html(result[mbti]["explain_03"]);
                $("#img_04").attr("src",result[mbti]["img_04"]);
                $("#explain_04").html(result[mbti]["explain_04"]);
                
            } else {
                $(".progress-bar").attr('style', 'width: calc(100/12*'+num+'%)');
                $("#pro_num").html(q[num]["pro_num"]);
                $("#title").html(q[num]["title"]);
                $("#type").val(q[num]["type"])
                $("#A").html(q[num]["A"]);
                $("#B").html(q[num]["B"]);
                num++;
            }
        }