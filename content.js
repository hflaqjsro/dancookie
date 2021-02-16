        var num = 1;
        var q = {
            1: {"title": "동아리에 신입으로 들어가서 아는 사람이 아무도 없는 상황", "type": "EI", "A": "어색한 건 못 참아 먼저 말 건다", "B": "존버가 답이야.. <br>말 걸어주길 기다린다.", "pro_num": "1/12"},
            2: {"title": "드디어 과제 끝! 이제 뭐하지?", "type": "EI", "A": "바로 술 마시러 간다", "B": "오늘은 하루 종일 못 봤던 드라마 <br>정주행이다.", "pro_num": "2/12"},
            3: {"title": "소개팅을 나가서 이상형을 만난 당신", "type": "EI", "A": "주제를 던지면서 대화를 이끌어 나간다", "B": "말을 많이 하기보다는 상대방의 <br>말을 들어준다", "pro_num": "3/12"},
            4: {"title": "소설을 끝까지 읽은 뒤 나는..", "type": "SN", "A": "아 다 읽었다", "B": "주인공이 어떻게 살아갔을지<br>상상해본다", "pro_num": "4/12"},
            5: {"title": "일을 할 때 나는", "type": "SN", "A": "매뉴얼이 있는 편을 선호한다", "B": "나만의 방식대로 매뉴얼을 만드는 걸 <br>선호한다", "pro_num": "5/12"},
            6: {"title": "술집 볼 때 1순위로 보는 요소는", "type": "SN", "A": "안주 퀄리티", "B": "분위기", "pro_num": "6/12"},
            7: {"title": "친구와의 점심 약속 메뉴 결정은 어떻게?", "type": "TF", "A": "오늘은 이거 무조건 먹어야 돼.<br>메뉴는 내가 정한다", "B": "뭐 먹어야 되지...?<br>친구에게 선택권을 넘긴다", "pro_num": "7/12"},
            8: {"title": "조원이 자료조사는 해왔으나 제대로 준비를 안한 것 같다", "type": "TF", "A": "여기 여기 다시 자료조사해서 <br>건네주세요.", "B": "그래도 하긴 했으니까... <br>내가 찾아서 보강하자", "pro_num": "8/12"},
            9: {"title": "친구의 이별 소식을 들은 당신", "type": "TF", "A": "왜 헤어졌어?", "B": "말할 때까지 기다려준다", "pro_num": "9/12"},
            10: {"title": "시작도 안한 과제 마감일 3일 전 친구로부터 놀자는 전화에", "type": "JP", "A": "기다려봐 과제부터 먼저 끝내고", "B": "내일의 나야 고생해라!<br> 오늘의 나는 일단 놀게", "pro_num": "10/12"},
            11: {"title": "수강신청 계획을 짜놓은 당신", "type": "JP", "A": "플랜 C까지 미리 계획해 놓았다", "B": "플랜 C란 없다. <br>하나의 시간표만 짜놨다", "pro_num": "11/12"},
            12: {"title": "나는 평소에 시험공부를..", "type": "JP", "A": "미리미리 복습까지 해놓는다", "B": "1주일 전부터 벼락치기!", "pro_num": "12/12"}
        }
        var result = {
            "INFP": {"animal": "'혼자 청춘드리마 찍는 중'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교 앞 분위기 좋은 곳은 모두 꿰차고 있음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"일벌리는 건 좋아하는데 마무리는 잘 못 지음.", "explain_05":"혼자 있는 걸 좋아하면서도 한편으로 외로움. 그렇다고 밖에 나가긴 싫음.", "explain_06": "감수성이 풍부해서 망상 놀이를 자주 함.", "explain_07":"가끔씩 강의를 듣다 말고 창밖을 쳐다보며 감상에 빠짐.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "INFJ": {"animal": "'개복치 인간 ver'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"내 사전에 실수란 없음, 그래서 팀플 할 때 스트레스를 많이 받음.", "explain_03":"걱정이 심하게 많아서 혼자 시뮬레이션 돌려보고 혼자 우울해함.", "explain_04":"팀플할 때 한 명이 손해봐야 되는 상황이면 그냥 본인이 희생함.", "explain_05":"말은 안 하지만 속으로는 누구보다 빠르게 남들과는 다르게 상대방 장담점 파악 중임.", "explain_06": "주변 사람들 성격에 따라 내 성격도 바뀜..", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "INTP": {"animal": "'나무늘보가 부러워'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"침대하고 물아일체 되는 게 인생의 낙임.", "explain_03":"뭐만 물어보면 일단 가능하다고 뱉고 봄. 근자감이 넘침.", "explain_04":"규칙을 극도로 싫어함.", "explain_05":"과 생활, 동아리 생활해야 할 이유를 못 느낌. ", "explain_06": "남들처럼 평범히 사는건 싫음.", "explain_07":"친구들 자취방 데려오면 자취방 클라스보고 지렸다 함..", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "INTJ": {"animal": "'혼자서도 잘 하는 척척박사'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"과제하다 문제가 생기면 물어보기보다는 도서관 가서 책을 한 권 더 읽어봄.", "explain_03":"말수는 적지만 할 말은 다 함.", "explain_04":"일을 남들보다 빨리 배워서 선배들에게 이쁨 받음.", "explain_05":"제일 싫어하는 부류는 팀플같이할 때 실력 없는 사람들.", "explain_06": "무표정인데 화났냐는 소리를 자주 들음.", "explain_07":"직업 뭐가 어울릴 거 같냐고 친구들한테 물어보면 10중 9는 연구원이라고 함.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ISFP": {"animal": "'알아서 해주길 바라는 결정장애'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"얼굴에 감정이 다 드러남.", "explain_03":"선택장애가 심해서 다 양보함.", "explain_04":"점심메뉴. 안주 다 양보하고 팀플 역할도 다 양보해서 결국 남는 거 맡음.", "explain_05":"그러다 가끔씩 결단력 생기면 무조건 그거 해야 함.", "explain_06": "노는 게 싫은 건 아닌데 약속 파토 나길 바람.", "explain_07":"무리 내에게 노래 잘 부르는 친구 역할을 담당하고 있음.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ISFJ": {"animal": "'지켜줘야 할 것 같은 강아지형'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"팀플 자료조사 역할 맡으려고 맨날 가위바위보 해야 됨.", "explain_03":"친구들이랑 있으면 말 많은데 안 친한 사람들이랑 있으면 입꾹닫 시전함.", "explain_04":"다른 사람들 눈치를 많이 봐서 착한 사람으로 남고 싶어 함. ", "explain_05":"널고 얕게보다는 깊고 좁게.", "explain_06": "사람들하고 친해지는 데 시간이 걸려서 새 학기 때마다 외로움.", "explain_07":"누가 나보고 뭐라 하면 최대한 고치려고 함.","explain_08": "자기에 대한 확신이 없어서 남한테 내 가치를 인정받으려고 함.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ISTP": {"animal": "'혼자서도 잘 놀아요'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02": "개인주의 성향이 강해서 팀플 있는 강의를 극혐함.", "explain_03":"팀플 있는 경우 피해 받은 거 싫어해서 선 넘으려고 하면 칼같이 쳐냄.", "explain_04":"운동 동아리에서 활동 중이거나 함교 앞 체육관에 다니고 있음.", "explain_05": "특정 분야에만 능력치 몰빵임.", "explain_06": "대화하다가도 할 말 없으면 그냥 말 안 함.", "explain_07":"연락 자체도 귀찮아해서 종강하면 개강할 때까지 먼저 연락 안 함.","explain_08":"'옷 잘 입는 애' 축에 속함.","explain_09": "효율성이 무엇보다 중요함. 어딜 가던 항상 최단 루트 계산해냄.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ISTJ": {"animal": "'계획 짜는 일은 다 내꺼임'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"완전 성실한 모범생. 과제는 공지 받는 즉시 계획을 짜서 착착 해나감.", "explain_03":"만나려면 며칠 전부터 약속 잡아야 됨 당일 약속 극혐해서 절대 안 나감.", "explain_04":"축제 대 몇 시까지 주점에서 놀고 언제부터 자리 맡아놓을지 언제 술집 갈지 머리속으로 다 생각해 놓음.", "explain_05":"익숙한 게 최고기 때문에 항상 가던 술집, 밥집만 가서 단골 가게가 몇 군데 있음.", "explain_06": "동아리나 과 내에서 임원 자리를 맡으려고 하지는 않지만 막상 맡으면 책임감 때문에 잘함.", "explain_07":"모르는거 생기면 선배한테 물어보면 됐던 새내기 때가 그리움.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ENFP": {"animal": "'뇌에서 필터 안 거치고 일단 뱉고 봄'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"엠티 갈 때 장보는 거에서 배제됨.(뜬금없이 옥수수콘 사자하고 그럼)", "explain_03":"어딜 가던 분위기 메이커임.", "explain_04":"선후배, 너나 할거 없이 모든 사람이 좋아함.", "explain_05":"시험기간에 공부하겠답시고 도서관 가지만 30분 공부하고 3시간 떠들다 집 옴.", "explain_06": "팀플 할 때 떠오르는 거 있으면 일단 내뱉고 봄. 아이디어뱅크마냥 쭉쭉 나옴. 근데 99%는 조원들한테 컷당함.", "explain_07":"대체로 밝은 편인데 속으로는 우울한 면도 있음.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ENFJ": {"animal": "'나를 따르라! 종교지도자 꿈나무'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"호불호 안 갈리는 인싸.", "explain_03":"섬세하고 사려 깊어서 남들의 관심사를 잘 파악함.", "explain_04":"남들이 어려워하는 사람하고도 잘 지냄.", "explain_05":"직업으로 선생님, 종교가 생각해본 적 있음.", "explain_06": "사진 찍거나 글 쓰는 걸 좋아함.", "explain_07":"그래서 기념일에 편지 챙겨주는 거 좋아함.", "explain_08":"조장 맡는 거 좋아함.","explain_09": "목표를 항상 이상적인 것과 연결 지음.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ENTP": {"animal": "'눈 마주치면 한 대 칠 거 같음'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"남들이 발견하지 못했던 문제점을 잘 찾아냄.", "explain_03":"스스로를 엄청 믿어서 항상 확신에 차있음.", "explain_04":"그래서 내가 틀린 게 아니라 세상이 틀린 거라면서 세상하고 싸우려고 함.", "explain_05":"관습보다는 자기 주관이 더 중요해서 주변에 적이 많은 스타일. 그러나 전혀 개의치 않음.", "explain_06": "기세다는 소리 맨날 들음. ", "explain_07":"불합리한 거 못 참음.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ENTJ": {"animal": "'반장 많이 해봤을 거 같음'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"팀플 조장, 동아리 회장, 단과대 회장 등.. 리더 경험 최소 1회 있음.", "explain_03":"자기 목표에 방해되는 사람은 뒤도 안 돌아보고 선그음. ", "explain_04":"일이 착착 진행될 때 쾌감을 느낌.", "explain_05":"사람들을 잘 이끌긴 하지만 독선적인 면 때문에 뒤에서 욕먹기도 함.", "explain_06": "일은 전략적, 계획적으로 해야 된다고 생각함.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ESFP": {"animal": "'노는 게 제일 좋은 뽀로로'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"공부하러 대학교 온 게 아니라 사실 놀러 왔음.", "explain_03":"공부하러 도서관 가놓고 폰만 만지다 옴.", "explain_04":"다른 사람 생일도 자기 생일처럼 좋아함. 깜짝 이벤트를 할 수 있기 때문임.", "explain_05":"어색함이란 내 사전에 없음. 어제 처음 만난 사람도 다음날이면 짱친임.", "explain_06": "시험은 미루고 미루다가 벼락치기함.", "explain_07":"돈 쓴 기억은 없는데 통장 잔고는 맨날 텅 비어있음.", "explain_08":"자기 얘기하는 거 좋아해서 주변 사람들이 내 비밀 다 알고 있음.", "explain_09": "술자리에서 진지한 얘기 나오는 거 못 견딤.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ESFJ": {"animal": "'판도라의 상자'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"인싸 그 자체임 선후배, 동기들이 내 이름은 다 앎.", "explain_03":"분명 과제 이야기하려고 모였는데 과제는 뒷전이고 일단 자기소개부터 하자고 함.", "explain_04":"별거 아닌 이야기에도 크게 웃어주는 리액션 맛집임.", "explain_05":"그래서 의도치 않게 판도라 상자의 역할을 맡음. 내가 입 여는 날은 누구 한 명 골로 가는 날임.", "explain_06": "웃으면서 팩폭 날리는 거 잘함.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ESTP": {"animal": "'인생 고민 하나도 없어 보임'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"학교에서 1분에 한 명꼴로 아는 사람 마주침.", "explain_03":"하고 싶은 말 다 하고 자존감이 높아서 딱히 스트레스가 없음.", "explain_04":"명령 받는 걸 싫어하고 주관이 뚜렷함.", "explain_05":"발표 들을 때 잘 못 알아듣다가 마지막에 세줄 요약 나오면 그때 이해함.", "explain_06": "밥 먹고 집 가기로 하고 만났는데 술 마시고, 노래방가고 머릿속에 떠오르는 거 다 하고 헤어짐.", "explain_07":"직설적이라 안친한 사람들에게 욕먹을 때가 많음.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"},
            "ESTJ": {"animal": "'동기여서 다행이다'", "category":"당신의 유형은?", "explain_01": "성격은?", "img_01": "./img/DAN01.png", "img_02": "./img/bar_01.png", "explain_02":"관종끼 있어서 팀플 역할은 무조건 발표 맡으려고 함.", "explain_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain_04": "사실 그냥 혼자 다 맡아서 하는 게 더 편함.", "explain_05": "계획적으로 움직임.", "explain_06": "옷 사지도 않을 건데 옷 사러 가고 이런 거 안 함. 남을 위해 시간 쓰는 걸 싫어함." , "explain_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain_aa":"잘맞는", "img_aa": "./img/DAN01.png", "explain_ab":"안맞는", "img_ab": "./img/DAN01.png"}
        }
        var result02 = {
            "INFP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "INFJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "INTP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "INTJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ISFP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ISFJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ISTP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ISTJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ENFP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ENFJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ENTP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ENTJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ESFP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ESFJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ESTP": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"},
            "ESTJ": {"animal02": "'동기여서 다행이다'", "category02":"당신의 유형은?", "explain02_01": "성격은?", "img02_01": "./img/DAN01.png", "img02_02": "./img/bar_01.png", "explain02_02":"관종끼 있어서 팀플 역햘은 무조건 발표맡으려고 함.", "explain02_03": "항상 주도해서 본인이 원하는 방향으로 이끌어 내야 적성이 풀림.", "explain02_04": "사실 그냥 혼자 다 맡아서 하는게 더 편함.", "explain02_05": "계획적으로 움직임.", "explain02_06": "옷 사지도 않을건데 옷사러 가고 이런거 안함. 남을 위해 시간 쓰는걸 싫어함." , "explain02_07": "승부욕이 강해서 다른 사람보다 뒤처지면 부들부들함.", "explain02_08": "아무리 친해도 일적으로 엮이면 같은 사람 맞나 싶음. 계획에 차질이 생기거나 불이익 당하면 불같이 화냄.", "explain02_aa":"잘맞는", "img02_aa": "./img/DAN01.png", "explain02_ab":"안맞는", "img02_ab": "./img/DAN01.png"}
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