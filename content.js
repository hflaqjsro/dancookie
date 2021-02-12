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
            "INFP": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "INFJ": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "INTP": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "INTJ": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ISFP": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ISFJ": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ISTP": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ISTJ": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ENFP": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ENFJ": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ENTP": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ENTJ": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ESFP": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ESFJ": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ESTP": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ESTJ": {"animal": "'혼자 청준드리마 찍는중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일 벌리는건 좋아하는데 마무리는 잘 못지음.", "explain_05":"혼자있는걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫.", "explain_06": "감수성이 풍부해서 망상놀이를 자주함.", "explain_07":"가끔씩 강의를 듣다말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"}
        }
        var result02 = {
            "INFP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "INFJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "INTP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "INTJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ISFP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ISFJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ISTP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ISTJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ENFP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ENFJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ENTP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ENTJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ESFP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ESFJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ESTP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ESTJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"- 관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_04": "계획적으로 움직임.", "explain02_05": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_06": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_07": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"}
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
                $("#explain_03").html(result[mbti]["explain_03"]);
                $("#explain_04").html(result[mbti]["explain_04"]);
                $("#explain_05").html(result[mbti]["explain_05"]);
                $("#explain_06").html(result[mbti]["explain_06"]);
                $("#explain_07").html(result[mbti]["explain_07"]);
                $("#explain_08").html(result[mbti]["explain_08"]);
                $("#explain_09").html(result[mbti]["explain_09"]);
                $("#img_aa").attr("src",result[mbti]["img_aa"]);
                $("#explain_aa").html(result[mbti]["explain_aa"]);
                $("#img_ab").attr("src",result[mbti]["img_ab"]);
                $("#explain_ab").html(result[mbti]["explain_ab"]);
                
                $("#img02_01").attr("src",result02[mbti]["img02_01"]);
                $("#category02").html(result02[mbti]["category02"]);
                $("#animal02").html(result02[mbti]["animal02"]);
                $("#explain02_01").html(result02[mbti]["explain02_01"]);
                $("#img02_02").attr("src",result02[mbti]["img02_02"]);
                $("#explain02_02").html(result02[mbti]["explain02_02"]);
                $("#explain02_03").html(result02[mbti]["explain02_03"]);
                $("#explain02_04").html(result02[mbti]["explain02_04"]);
                $("#explain02_05").html(result02[mbti]["explain02_05"]);
                $("#explain02_06").html(result02[mbti]["explain02_06"]);
                $("#explain02_07").html(result02[mbti]["explain02_07"]);
                $("#explain02_08").html(result02[mbti]["explain02_08"]);
                $("#explain02_09").html(result02[mbti]["explain02_09"]);
                $("#img02_aa").attr("src",result02[mbti]["img02_aa"]);
                $("#explain02_aa").html(result02[mbti]["explain02_aa"]);
                $("#img02_ab").attr("src",result02[mbti]["img02_ab"]);
                $("#explain02_ab").html(result02[mbti]["explain02_ab"]); 
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

         $("#Y").click(function(){
            $(".result").hide();
            $(".result02").show();
         });
         $("#X").click(function(){
            $(".result02").hide();
            $(".result").show();
         });