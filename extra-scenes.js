// 16 Ảnh Demo & Prompt Bổ Sung cho các cảnh còn thiếu so với kịch bản đầy đủ
// Khớp 1-1 với Phân cảnh 01 -> 16 (Tổng cộng 32 ảnh demo toàn bộ video)

window.EXTRA_SHOTS = [
  {
    sceneId: 1,
    code: "PC 01 • Bổ sung",
    title: "Split Screen Học sinh 2 điểm trường chào mở đầu",
    fillsGap: "Bổ sung cú máy 2 học sinh đại diện (1 bạn Điểm chính & 1 bạn Phân hiệu) đứng riêng ở 2 cơ sở ghép chia đôi màn hình 50/50 đọc lời chào.",
    image: "./images-bo-sung/scene-01-b.jpg",
    cameraSpec: "Sigma 24–28mm • Khẩu f/4 (đứng bóng râm) • 4K 25p • Bật lưới 3x3 căn giữa khung!",
    gimbalSpec: "RS 4 Mini: Bấm đúp cò Recenter → Bóp giữ cò Lock tĩnh tuyệt đối",
    lightSpec: "Tắt đèn (Đứng bóng râm hiên trường để mặt sáng dịu & xóa phông đẹp)",
    motionVi: "Quay 2 clip riêng ở 2 điểm trường cùng cự ly 28mm, học sinh đứng chính giữa khung hình nhìn thẳng ống kính vẫy tay và nói tự tin; về ghép Split Screen 50/50.",
    prompt: "Single continuous steady documentary shot in clean 50/50 vertical split-screen framing divided by a crisp center line. Left half: cheerful 9-year-old Vietnamese schoolboy in white shirt and red scarf standing centered in a sunlit Hanoi primary school courtyard smiling and waving warmly at the camera. Right half: cheerful 9-year-old Vietnamese schoolgirl in white shirt and red scarf standing centered at a second sunny school campus smiling and waving welcome in sync. Bright natural morning daylight, pleasant shallow depth of field, cheerful schoolyard ambiance, no garbled speech."
  },
  {
    sceneId: 2,
    code: "PC 02 • Bổ sung",
    title: "Cận cảnh học sinh Phân hiệu đứng lên trả lời cô",
    fillsGap: "Bổ sung góc cận nụ cười tương tác cô – trò và cảnh chuyển sang Phân hiệu: học sinh đứng lên trả lời \"Today is Monday!\".",
    image: "./images-bo-sung/scene-02-b.jpg",
    cameraSpec: "Sigma 35mm • Khẩu f/2.8 (xóa phông lớp học mịn!) • 4K 25p (1/50s)",
    gimbalSpec: "RS 4 Mini: Bóp giữ cò Lock đẩy vào cực nhẹ (micro push-in)",
    lightSpec: "Bật đèn nhẹ 30% (5500K góc 45°) — đặt thêm điện thoại ghi âm trên bàn bé!",
    motionVi: "RS 4 Mini đẩy thật chậm vào gương mặt tươi cười tự tin của học sinh vừa đứng lên tại bàn gỗ trả lời cô giáo, các bạn xung quanh quay lại cười mờ mềm ở hậu cảnh.",
    prompt: "Single continuous gentle slow gimbal push-in medium close-up inside a bright sunlit Vietnamese primary school classroom. A beaming 9-year-old Vietnamese boy in white shirt and red scarf stands proudly beside his wooden desk smiling warmly and speaking cheerfully toward the teacher off-camera while classmates turn smiling in creamy f/2.8 bokeh. Soft natural window light with gentle fill, authentic happy classroom ambiance, no garbled speech."
  },
  {
    sceneId: 3,
    code: "PC 03 • Bổ sung",
    title: "Cận cô Tổng phụ trách cầm micro dẫn trò chơi Happy / Excited",
    fillsGap: "Bổ sung góc quay cô Tổng phụ trách cầm micro tương tác mini-game ('Happy' cười tươi / 'Excited' vỗ tay) & học sinh giơ tay hưởng ứng.",
    image: "./images-bo-sung/scene-03-b.jpg",
    cameraSpec: "Sigma 35–50mm • Khẩu f/5.6 (ngoài nắng sáng) • 4K 25p (thu tiếng qua loa/micro)",
    gimbalSpec: "RS 4 Mini: Chế độ PF góc hơi thấp đứng giữa hàng đầu hướng lên cô TPT",
    lightSpec: "Tắt đèn (Nắng sáng sớm, đứng góc thuận sáng tránh ngược nắng)",
    motionVi: "RS 4 Mini chế độ PF đi chậm ngang phía trước hàng học sinh đang giơ tay vỗ mờ ở tiền cảnh, lấy nét sắc vào cô Tổng phụ trách cười rạng rỡ cầm micro vỗ tay bắt nhịp.",
    prompt: "Single continuous dynamic slightly low-angle gimbal pan-follow medium shot in a sunny Vietnamese primary school courtyard during morning assembly. A joyful Vietnamese female teacher holds a wireless microphone, smiling warmly and clapping as she leads an upbeat English challenge, with rows of laughing uniformed students raising hands and smiling brightly in foreground and background depth. Crisp morning sunlight, lively clapping and joyful schoolyard energy, no garbled speech."
  },
  {
    sceneId: 4,
    code: "PC 04 • Bổ sung ⭐",
    title: "Cận bàn trò chơi ghép từ & giải câu đố (Word Games & Puzzles)",
    fillsGap: "Bổ sung cận cảnh các góc trò chơi ghép chữ cái và giải câu đố (bên cạnh vòng quay từ vựng và thẻ butterfly).",
    image: "./images-bo-sung/scene-04-b.jpg",
    cameraSpec: "Sigma 50mm • Khẩu f/2.8 (lấy nét cận 30cm cực sắc!) • 1080p 50p slow-mo",
    gimbalSpec: "RS 4 Mini: Bóp giữ cò Lock nghiêng nhẹ 45° trượt ngang mặt bàn trò chơi",
    lightSpec: "Tắt đèn (hoặc bật 25% nếu dưới mái che râm)",
    motionVi: "RS 4 Mini trượt chậm ở góc 45 độ qua đôi tay nhỏ của các học sinh đang hăng say xếp các ô chữ tiếng Anh màu sắc thành từ 'HAPPY' và ghép thẻ tranh đố vui.",
    prompt: "Single continuous smooth 45-degree angled close-up gimbal trucking shot over a colorful activity table in a shaded Vietnamese school English Zone. Small hands of smiling primary school students eagerly slide colorful wooden English letter tiles to spell 'HAPPY' and match illustrated animal puzzle cards while classmates point and laugh softly at the top of the frame. Creamy f/2.8 depth of field, bright open-shade daylight, cheerful lively classroom play ambiance, no garbled speech."
  },
  {
    sceneId: 5,
    code: "PC 05 • Bổ sung ⭐",
    title: "Chân dung bé cầm lá giấy đọc thông điệp & bạn viết lên lá",
    fillsGap: "Bổ sung cận cảnh viết thông điệp lên lá giấy và chùm chân dung 6 học sinh lần lượt cầm lá đọc to ('Be kind!', 'Never give up!', 'Dream big!').",
    image: "./images-bo-sung/scene-05-b.jpg",
    cameraSpec: "Sigma 50mm • Khẩu f/2.8 (bóng râm xóa phông mù mịt!) • 4K 25p (quay 6 bé nối tiếp)",
    gimbalSpec: "RS 4 Mini: Bóp giữ cò Lock đứng tĩnh tuyệt đối • Chừa 15% đáy cho phụ đề",
    lightSpec: "Tắt đèn (Đứng dưới tán cây bóng râm để mở trọn f/2.8 không cháy sáng!)",
    motionVi: "RS 4 Mini khóa tĩnh hoàn toàn ở 50mm f/2.8, bé gái tươi cười giơ chiếc lá giấy xanh có dòng chữ 'Never give up!' ngang vai nhìn thẳng ống kính gật đầu mỉm cười rạng rỡ.",
    prompt: "Single continuous steady shallow-depth-of-field close-up portrait in soft dappled shade beside a green school tree covered in colorful paper leaves. A joyful 9-year-old Vietnamese schoolgirl in white shirt and red scarf gently lifts a bright green paper leaf handwritten with 'Never give up!' near her shoulder, beaming warmly directly into the camera while another student writes on a yellow paper leaf softly blurred behind. Ultra-creamy f/2.8 greenery bokeh, peaceful sunlit courtyard ambiance, no garbled speech."
  },
  {
    sceneId: 6,
    code: "PC 06 • Bổ sung ⭐",
    title: "Học sinh khoe sổ đầy chữ ký & Lễ trao chứng nhận Best English Speaker",
    fillsGap: "Bổ sung mục 'Hình ảnh bổ sung' cực quan trọng của kịch bản: học sinh khoe trang hộ chiếu kín chữ ký và cảnh thầy cô trao giấy chứng nhận/danh hiệu.",
    image: "./images-bo-sung/scene-06-b.jpg",
    cameraSpec: "Sigma 28–35mm • Khẩu f/3.5 (cả cô & 2 bé cùng nét!) • 1080p 50p slow-mo",
    gimbalSpec: "RS 4 Mini: Chế độ PF đẩy nhẹ tiến vào (Push-in) khoảnh khắc trao giải",
    lightSpec: "Tắt đèn nếu ngoài sân • Bật 30% nếu trong hành lang/hội trường",
    motionVi: "RS 4 Mini đẩy chậm đầy cảm xúc vào khoảnh khắc cô giáo trao khung giấy chứng nhận 'BEST ENGLISH SPEAKER' cho 2 học sinh đang rạng rỡ cầm sổ English Passport đầy chữ ký, cả lớp phía sau vỗ tay chúc mừng.",
    prompt: "Single continuous uplifting slow gimbal push-in medium shot in a bright sunlit Vietnamese primary school courtyard. A smiling Vietnamese female principal warmly presents a framed 'BEST ENGLISH SPEAKER' award certificate to two beaming 9-year-old students in white uniforms and red scarves who proudly hold open their signature-filled English Passport booklets, while classmates clap enthusiastically in soft background focus. Bright celebratory daylight, warm joyful applause ambiance, no garbled speech."
  },
  {
    sceneId: 7,
    code: "PC 07 • Bổ sung",
    title: "Cận sơ đồ tư duy (Mind Map), mô hình & bài viết tay ở English Corner",
    fillsGap: "Bổ sung cận cảnh đa dạng các sản phẩm học tập (mind map, bài viết tay, mô hình thủ công) ngoài poster cá heo.",
    image: "./images-bo-sung/scene-07-b.jpg",
    cameraSpec: "Sigma 35mm • Khẩu f/2.8 • 1080p 50p (trượt cực mượt dọc bảng)",
    gimbalSpec: "RS 4 Mini: Bóp giữ cò Lock trượt ngang song song mặt bảng (trái → phải)",
    lightSpec: "Bật đèn 35% chiếu nghiêng 45° từ bên hông để không lóa mặt giấy/mica",
    motionVi: "RS 4 Mini giữ cò Lock trượt ngang mượt từ trái sang phải dọc bảng English Corner rực rỡ sơ đồ tư duy 'ANIMALS', 'MY SCHOOL' và các mô hình thủ công khi bàn tay học sinh chỉ trỏ hào hứng.",
    prompt: "Single continuous silky lateral gimbal trucking shot moving left to right along a vibrant Vietnamese primary school English Corner display board covered with colorful hand-drawn student mind maps, neat handwritten English essays, and paper craft models. Two smiling students point admiringly at the creative projects as the camera glides smoothly past with creamy f/2.8 depth. Clean corridor daylight with gentle side fill light, soft cheerful hallway ambiance, no garbled speech."
  },
  {
    sceneId: 8,
    code: "PC 08 • Bổ sung",
    title: "Học sinh rút sách tiếng Anh trên kệ & tự ngồi thảo luận nhóm",
    fillsGap: "Bổ sung cảnh học sinh bước vào thư viện chọn sách trên kệ, tự ngồi đọc thảo luận và giới thiệu cuốn sách yêu thích tại Phân hiệu.",
    image: "./images-bo-sung/scene-08-b.jpg",
    cameraSpec: "Sigma 28mm • Khẩu f/2.8–f/3.2 (rất sáng trong thư viện!) • 4K 25p & 1080p 50p",
    gimbalSpec: "RS 4 Mini: Chế độ PF đi chậm theo bé rút sách rồi xoay nhẹ sang bàn đọc",
    lightSpec: "Bật đèn nhẹ 35% (5200K ấm dịu, đặt chếch 45°)",
    motionVi: "RS 4 Mini di chuyển êm từ kệ sách gỗ theo học sinh mỉm cười rút một cuốn truyện tranh tiếng Anh, mở góc thấy 2 bạn cùng lớp đang chụm đầu lật xem sách động vật vui vẻ ở bàn đọc gần đó.",
    prompt: "Single continuous warm smooth gimbal pan-follow medium shot inside a bright sunlit Vietnamese primary school library with colorful wooden bookshelves. A smiling 9-year-old Vietnamese boy in white shirt and red scarf gently pulls an illustrated English storybook from a shelf as the camera glides smoothly to reveal two classmates sitting at a cozy reading table flipping through an animal picture book and chatting happily. Soft window light with warm subtle fill, peaceful library ambiance, no garbled speech."
  },
  {
    sceneId: 9,
    code: "PC 09 • Bổ sung",
    title: "Góc cao từ chiếu nghỉ nhìn xuống cầu thang & tường khẩu hiệu",
    fillsGap: "Bổ sung đúng yêu cầu kịch bản: 'Góc quay từ trên cao nhìn xuống cầu thang' và lia qua khẩu hiệu tiếng Anh trên tường hành lang.",
    image: "./images-bo-sung/scene-09-b.jpg",
    cameraSpec: "Sigma 18mm rộng nhất! (SteadyShot OFF) • Khẩu f/4 • 1080p 50p",
    gimbalSpec: "RS 4 Mini: Đứng an toàn trên chiếu nghỉ tầng trên, gạt PF lia nhẹ xuống theo bước chân",
    lightSpec: "Bật đèn 35% (hoặc tận dụng ánh sáng cửa sổ lớn dọc cầu thang)",
    motionVi: "RS 4 Mini đặt ở góc cao trên chiếu nghỉ tầng trên nhìn xuống cầu thang rộng 18mm, lia mượt theo nhóm học sinh tươi cười bước lên từng bậc thang có dán khẩu hiệu và tường tranh tiếng Anh.",
    prompt: "Single continuous smooth high-angle wide gimbal pan shot from an upper staircase landing looking down a sunlit Vietnamese primary school stairwell. Cheerful uniformed primary students walk steadily up the steps laughing and chatting, clearly revealing colorful English motivational posters on the pastel corridor walls and bright English decals along the stair risers below. Bright natural daylight streaming through stairwell windows, lively footsteps and joyful school ambiance, no garbled speech."
  },
  {
    sceneId: 10,
    code: "PC 10 • Bổ sung",
    title: "Cận cảnh bỏ pin cũ vào Trạm Thu Pin (Battery Collection Box)",
    fillsGap: "Bổ sung cú cận đắt giá tại Phân hiệu: bàn tay học sinh bỏ pin cũ vào hộp thu gom pin có thông điệp bảo vệ môi trường.",
    image: "./images-bo-sung/scene-10-b.jpg",
    cameraSpec: "Sigma 50mm • Khẩu f/3.5 (xóa phông vườn xanh) • 1080p 50p slow-mo",
    gimbalSpec: "RS 4 Mini: Bóp giữ cò Lock đẩy thật chậm (slow push-in) vào khe hộp pin",
    lightSpec: "Tắt đèn (Quay trong bóng râm vườn trường)",
    motionVi: "RS 4 Mini giữ cò Lock đẩy chậm cực mượt ở 50mm vào bàn tay nhỏ của học sinh cẩn thận thả viên pin cũ vào khe hộp 'BATTERY COLLECTION BOX', phía sau cô giáo mỉm cười gật đầu khen ngợi.",
    prompt: "Single continuous crisp 50fps slow-motion close-up gimbal push-in outdoors in a shady green Vietnamese school garden. A 9-year-old Vietnamese student's hand carefully drops a used AA battery into the slot of a neat green labeled 'BATTERY COLLECTION BOX' decorated with eco-recycling stickers, while a smiling Vietnamese teacher watches approvingly in creamy leafy background bokeh. Soft natural garden daylight, gentle breeze and birdsong ambiance, no garbled speech."
  },
  {
    sceneId: 11,
    code: "PC 11 • Bổ sung ⭐",
    title: "Học sinh đứng lên trả lời bài Khoa học Tự nhiên bằng Tiếng Anh",
    fillsGap: "Bổ sung cú quay tách riêng học sinh đứng tại bàn trả lời câu hỏi về rễ, thân, lá, hoa (để cắt đan xen với cô giảng & nhóm vẽ tranh A3).",
    image: "./images-bo-sung/scene-11-b.jpg",
    cameraSpec: "Sigma 28mm • Khẩu f/3.5 • 4K 25p (1/50s) • Nhớ đặt điện thoại ghi âm trên bàn bé!",
    gimbalSpec: "RS 4 Mini: Chế độ PF đẩy nhẹ từ góc chéo trước mặt bé",
    lightSpec: "Bật đèn nhẹ 35% (5500K, góc chếch 45°)",
    motionVi: "RS 4 Mini đẩy nhẹ vào học sinh nam đang đứng thẳng tự tin bên bàn gỗ, vừa nói tiếng Anh vừa chỉ tay minh họa vào chậu cây có hoa đặt trước mặt, bạn bè xung quanh chăm chú lắng nghe.",
    prompt: "Single continuous smooth gimbal slow push-in medium classroom shot. A confident 9-year-old Vietnamese schoolboy in white uniform and red scarf stands proudly at his wooden desk speaking enthusiastically in English while gesturing toward a real potted flowering plant on his desk, as classmates look on attentively with warm smiles and the teacher nods softly in the background. Bright natural window light with gentle fill, authentic classroom ambiance, no garbled speech."
  },
  {
    sceneId: 12,
    code: "PC 12 • Bổ sung",
    title: "Nhóm bạn giờ ra chơi chia sẻ đồ chơi & rủ nhau nhập cuộc",
    fillsGap: "Bổ sung tình huống Điểm chính trong kịch bản: nhóm bạn chơi trò chơi / chia sẻ đồ chơi ở ghế đá sân trường và rủ thêm bạn vào chơi cùng.",
    image: "./images-bo-sung/scene-12-b.jpg",
    cameraSpec: "Sigma 24mm • Khẩu f/4 (bóng râm dưới tán cây) • 4K 25p (thoại ngắn) & 1080p 50p",
    gimbalSpec: "RS 4 Mini: Chế độ PF đi vòng cung nhẹ (Half-Orbit) quanh ghế đá",
    lightSpec: "Tắt đèn (Nắng chiều dịu xuyên qua tán lá xanh)",
    motionVi: "RS 4 Mini chế độ PF đi vòng cung êm quanh 4 bạn học sinh đang ngồi ghế đá sân trường cười rộn rã chơi trò chơi ghép hình và vẫy tay mời một bạn mới bước tới nhập cuộc.",
    prompt: "Single continuous candid gimbal half-orbit medium shot under shady leafy green trees in a sunlit Vietnamese primary school courtyard during break time. Four laughing 9-year-old Vietnamese students in white shirts and red scarves gather happily around a stone courtyard bench playing colorful board games and sharing small toys while waving warmly to invite another smiling friend to join. Warm golden afternoon sunlight, joyful playful courtyard laughter ambiance, no garbled speech."
  },
  {
    sceneId: 13,
    code: "PC 13 • Bổ sung",
    title: "Siêu cận khay cơm bán trú sạch sẽ đầy đủ dinh dưỡng TRƯỚC KHI ĂN",
    fillsGap: "Bổ sung cảnh đặc tả thức ăn được chuẩn bị sạch sẽ, đầy đủ dinh dưỡng (cơm trắng, thịt gà vàng, rau xanh, canh) ngay trước giờ ăn trưa.",
    image: "./images-bo-sung/scene-13-b.jpg",
    cameraSpec: "Sigma 45–50mm • Khẩu f/2.8 (xóa phông hậu cảnh siêu ngon mắt!) • 1080p 50p",
    gimbalSpec: "RS 4 Mini: Bóp giữ cò Lock trượt ngang cực chậm góc 45° sát hàng khay cơm",
    lightSpec: "Bật đèn 35% chỉnh hơi ấm 5000K chiếu chếch 45° làm thịt gà & rau tươi ngon",
    motionVi: "RS 4 Mini giữ cò Lock trượt ngang mượt như ray ở góc 45 độ dọc theo hàng khay cơm inox sáng bóng đầy ắp cơm trắng, gà rán vàng ươm, rau xanh và canh nóng hổi, phía sau các bé ngồi ngay ngắn mỉm cười mờ mềm.",
    prompt: "Single continuous ultra-smooth 50fps slow lateral gimbal trucking close-up at a 45-degree angle gliding along a neat row of gleaming stainless-steel Vietnamese school lunch trays filled with fluffy white rice, golden glazed chicken, vibrant green vegetables, and clear soup before lunch begins. Creamy f/2.8 background bokeh of smiling uniformed students seated tidily waiting to eat, warm appetizing 5000K indoor fill lighting, gentle cheerful dining room ambiance, no dialogue."
  },
  {
    sceneId: 14,
    code: "PC 14 • Bổ sung ⭐",
    title: "Bé xung phong làm 'Little Music Star' lắc nhạc cụ biểu diễn trước lớp",
    fillsGap: "Bổ sung đoạn cao trào tại Phân hiệu: học sinh giơ tay làm 'little music star' cầm nhạc cụ nhỏ (maracas / drum) đứng lên hát biểu diễn trong tiếng vỗ tay cổ vũ.",
    image: "./images-bo-sung/scene-14-b.jpg",
    cameraSpec: "Sigma 35mm • Khẩu f/2.8 • 4K 25p (hát) & 1080p 50p (lắc maracas & vỗ tay)",
    gimbalSpec: "RS 4 Mini: Chế độ PF Half-Orbit nhẹ tôn vinh 'ca sĩ nhí' ở trung tâm",
    lightSpec: "Bật đèn 35% (5500K, góc 45°)",
    motionVi: "RS 4 Mini chế độ PF đi vòng cung nhẹ quanh cô bé 'Little Music Star' đang rạng rỡ lắc đôi xúc xắc gỗ (maracas) hát đầy tự tin trước lớp, cô giáo bên cạnh gõ trống nhỏ giữ nhịp và cả lớp vỗ tay rộn ràng.",
    prompt: "Single continuous joyful gimbal half-orbit medium close-up inside a colorful Vietnamese primary school music room. A beaming 9-year-old Vietnamese girl in white shirt and red scarf stands confidently at the front shaking colorful wooden maracas and singing happily like a little music star while the smiling music teacher taps a small hand drum nearby and classmates clap enthusiastically in soft foreground bokeh. Vibrant bright lighting, rhythmic upbeat percussion and clapping ambiance, no garbled speech."
  },
  {
    sceneId: 15,
    code: "PC 15 • Bổ sung",
    title: "Cả đội bóng rổ & thầy Thể dục chụm tay tung lên trời hô quyết tâm",
    fillsGap: "Bổ sung cảnh kết mạnh mẽ của Phân cảnh 15: cả đội cùng thầy thể dục chụm tay hô vang 'We are strong! We are healthy! We are a team!'.",
    image: "./images-bo-sung/scene-15-b.jpg",
    cameraSpec: "Sigma 18mm rộng nhất! • Khẩu f/5.6 (nắng chiều) • 4K 25p (hô vang) & 1080p 50p",
    gimbalSpec: "RS 4 Mini: Hạ thấp ngang đầu gối (Briefcase) gạt PTF hất máy lên trời theo tay cả đội!",
    lightSpec: "Tắt đèn (Nắng chiều vàng xuyên nhẹ cực điện ảnh!)",
    motionVi: "RS 4 Mini đặt góc cực thấp ở trung tâm vòng tròn hất nhẹ lên trời xanh khi thầy thể dục và cả đội bóng rổ nhí chụm tay vào nhau rồi đồng loạt bật tung tay lên trời reo hò đầy khí thế.",
    prompt: "Single continuous dynamic low-angle wide gimbal shot tilting smoothly upward on a sunny outdoor Vietnamese primary school basketball court. A joyful team of 9-year-old Vietnamese primary students in blue-and-white PE sports uniforms and their smiling PE coach stack their hands tightly in the center huddle and enthusiastically throw their hands up toward the bright blue sky cheering together. Warm golden afternoon flare, energetic team cheering ambiance, no garbled speech."
  },
  {
    sceneId: 16,
    code: "KẾT • Bổ sung",
    title: "Khung ghép đôi Split Screen 2 điểm trường đồng loạt vẫy chào kết phim",
    fillsGap: "Bổ sung khung hình biểu tượng của Phần kết: ghép song song Điểm chính (trái) và Phân hiệu (phải) cùng vẫy tay cho thông điệp 'Two Campuses – One Big Family'.",
    image: "./images-bo-sung/scene-16-b.jpg",
    cameraSpec: "Sigma 18mm rộng nhất! (SteadyShot OFF) • Khẩu f/7.1 • 1080p 50p ở cả 2 cơ sở",
    gimbalSpec: "RS 4 Mini: Cùng kiểu đi lùi chậm & nâng nhẹ gimbal ở cả 2 cơ sở để ghép đối xứng!",
    lightSpec: "Tắt đèn (Quay nắng sáng/chiều cùng hướng sáng để 2 nửa màn hình đồng màu!)",
    motionVi: "Khung hình chia đôi 50/50 hoàn hảo: nửa trái là Điểm chính với học sinh cùng thầy cô vẫy tay, nửa phải là Phân hiệu với học sinh cùng thầy cô vẫy tay đồng bộ khi máy từ từ lùi mở rộng.",
    prompt: "Single continuous inspiring cinematic 50/50 vertical split-screen finale divided cleanly down the center by a thin white line, both halves pulling backward steadily in sync. Left half: sunny Main Campus courtyard with a smiling 9-year-old Vietnamese boy host in front and teachers and dozens of uniformed primary students waving happily behind him. Right half: sunny Branch Campus courtyard with a smiling 9-year-old Vietnamese girl host in front and teachers and dozens of uniformed students waving happily behind her. Matching golden daylight, joyous uplifting cheering and clapping finale ambiance, no garbled speech."
  }
];

// 4 Cảnh đặc biệt từ File Excel gốc: Cảnh R5 (Tổ chuyên môn) + 3 Bước Lớp học OIC (Sink & Float)
window.SPECIAL_SCENES = [
  {
    id: "r5",
    code: "KHÚC 1 • CẢNH R5 (MỚI)",
    badgeColor: "badge-blue",
    title: "Giáo viên chuẩn bị bài, học liệu & sinh hoạt tổ chuyên môn",
    schedule: "Trường chính • Thư viện (10:40 – 10:50) • Cô Cúc, Cô Trang + Cô Ngân",
    image: "./images-oic-r5/r5_teachers_prep.jpg",
    purpose: "Hình ảnh minh họa dưới Lời bình VO R5 (Cột H Excel): \"To bring that vision into practice, connecting Vietnam's 2018 General Education Curriculum with suitable international educational approaches...\" — Không cần thu tiếng trực tiếp!",
    cameraSpec: "Sigma 24mm f/3.5 (toàn bàn 3 cô) + 45mm f/2.8 (cận tay xếp Flashcard, sổ Passport, giáo án)",
    gimbalSpec: "RS 4 Mini: PF trượt ngang chậm quanh bàn & Giữ cò Lock đẩy cận bàn tay",
    lightSpec: "Bật đèn LED nhỏ 30% (5500K góc chếch 45°)",
    voText: "VO R5: \"To bring that vision into practice, connecting Vietnam's 2018 General Education Curriculum with suitable international educational approaches requires careful consideration of learning goals, pupils' ages, and each school's actual conditions.\""
  },
  {
    id: "oic1",
    code: "KHÚC 3 • LỚP OIC — STEP 1 (PREDICT)",
    badgeColor: "badge-green",
    title: "Lớp OIC: Giới thiệu đồ vật & Dự đoán Chìm hay Nổi (Sink & Float)",
    schedule: "Trường chính (BẮT BUỘC 14:00 – 14:55) • Phòng học OIC",
    image: "./images-oic-r5/oic_step1_predict.jpg",
    purpose: "Mở đầu bằng Lời bình VO R14, sau đó cô giơ bát nước trong suốt, cái thìa kim loại và ô tô đồ chơi nhựa rỗng hỏi học sinh dự đoán vật nào chìm, vật nào nổi.",
    cameraSpec: "Sigma 24mm f/3.5 (cô & bảng) + 35mm f/2.8 (cận 2–3 học sinh giơ tay đoán) • 4K 25p (1/50s)",
    gimbalSpec: "RS 4 Mini: PF lia mượt từ cô sang các cánh tay giơ lên dự đoán",
    lightSpec: "Bật đèn LED nhỏ 35% (5500K góc 45°) • Nhớ đặt điện thoại ghi âm gần bàn đầu!",
    voText: "VO R14 + Thoại: \"Look! A bowl of water, a spoon, and a toy car. Do you think they will float or sink?\" — \"I think the spoon will sink!\" — \"Interesting ideas, let's find out!\""
  },
  {
    id: "oic2",
    code: "KHÚC 3 • LỚP OIC — STEP 2 (TEST & OBSERVE)",
    badgeColor: "badge-green",
    title: "Lớp OIC: Nhóm 6 bé tự thả 6 vật vào bát nước TRONG SUỐT",
    schedule: "Trường chính (14:15 – 14:30) • BẮT BUỘC dùng bát/chậu trong suốt!",
    image: "./images-oic-r5/oic_step2_test_water.jpg",
    purpose: "Cảnh đắt giá nhất của toàn Khúc 3: hạ máy quay ngang mép bát nước trong suốt để thấy rõ chìa khóa/hòn đá chìm xuống đáy, bút chì/thước nhựa nổi trên mặt nước! (Nhớ thả thử trước cả 8 vật!).",
    cameraSpec: "Sigma 50mm f/2.8 (1080p 50p cận bát nước!) + 24mm f/4 (cô & trợ giảng hỏi từng nhóm 6 bé)",
    gimbalSpec: "RS 4 Mini: Chế độ xách thấp (Briefcase) ngang mặt bàn, giữ cò Lock đẩy chậm vào bát nước",
    lightSpec: "Bật đèn LED nhỏ 35% chiếu nghiêng hông (tránh rọi thẳng gây lóa mặt nước!)",
    voText: "Thoại: \"Now it's your turn to be little scientists! Does the key float or sink?\" — \"It sinks! And the pencil floats!\""
  },
  {
    id: "oic3",
    code: "KHÚC 3 • LỚP OIC — STEP 3 & 4 (PRESENT & WRAP-UP)",
    badgeColor: "badge-green",
    title: "Lớp OIC: Nhóm thuyết trình kết quả & Cả lớp tổng kết vỗ tay",
    schedule: "Trường chính (14:30 – 14:55) • Chọn 1 nhóm nói to rõ nhất",
    image: "./images-oic-r5/oic_step3_present_wrapup.jpg",
    purpose: "Lưu ý sửa chuẩn khoa học: KHÔNG nói 'filled with air' cho bút chì/que gỗ/thước nhựa — chỉ nói 'because it is light' (vật nổi) và 'because it is heavy and solid' (vật chìm)! Kết bằng VO R17 + cả lớp đồng thanh Wrap-up.",
    cameraSpec: "Sigma 28mm f/3.5 (nhóm đứng báo cáo) + 18mm f/3.5 (toàn lớp vỗ tay) • 4K 25p (1/50s)",
    gimbalSpec: "RS 4 Mini: Giữ cò Lock tĩnh khi nhóm báo cáo → PF lia rộng cả lớp vỗ tay",
    lightSpec: "Bật đèn LED nhỏ 35% góc 45° • Đặt điện thoại ghi âm gần nhóm thuyết trình",
    voText: "Thoại chuẩn KH + VO R17: \"The key sinks because it is heavy and solid. The pencil floats because it is light.\" → \"What did we learn today?\" — \"Some things float. Some things sink!\""
  }
];
