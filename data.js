// Dữ liệu kịch bản quay chi tiết — Trường Tiểu học Đại Mỗ
// Thiết bị thực tế: Sony ZV-E10 + Sigma 18-50mm f/2.8 DC DN + DJI RS 4 Mini + 1 Đèn LED nhỏ

window.SHOTBOOK_DATA = {
  project: {
    title: "ĐẠI MỖ – HAPPY SCHOOL, ENGLISH EVERY DAY",
    school: "Trường Tiểu học Đại Mỗ",
    totalDuration: "10 phút 30 giây",
    totalScenes: 16,
    gear: [
      { id: "camera", name: "Sony ZV-E10 (Mark I)", note: "SteadyShot OFF • 4K 25p & 1080p 50p" },
      { id: "lens", name: "Sigma 18-50mm f/2.8", note: "Cân gimbal ở mốc ~30mm • Khẩu f/2.8 – f/8" },
      { id: "gimbal", name: "DJI RS 4 Mini", note: "Gạt PF • Bóp giữ cò = Lock • REC qua Bluetooth" },
      { id: "light", name: "1 Đèn LED nhỏ", note: "Nhờ f/2.8 sáng tốt, trong lớp chỉ cần bật nhẹ 25–45%" }
    ]
  },

  gearGuide: {
    zve10Settings: [
      {
        category: "1. Cân Sigma 18-50mm trên DJI RS 4 Mini (QUAN TRỌNG NHẤT)",
        setting: "Vặn lens về mốc ~30mm → Cân bằng 3 trục → Chạy Auto Tune",
        why: "Sigma 18-50mm f/2.8 là lens zoom thò đầu (external zoom). Tổng máy + lens chỉ ~633g (RS 4 Mini tải tới 2kg!). Cân chuẩn ở giữa dải (~28–32mm) giúp bạn xoay zoom tự do 18mm–50mm cả buổi mà KHÔNG cần cân lại gimbal! (Lưu ý: chọn xong tiêu cự rồi mới bấm REC, tránh vừa quay vừa vặn zoom)."
      },
      {
        category: "2. Quy tắc chọn Khẩu độ trên Sigma 18-50mm f/2.8",
        setting: "Cận 1 bé: f/2.8 | 2 người: f/3.5–f/4 | Ngoài nắng (không ND): f/5.6–f/8",
        why: "ĐỪNG mở f/2.8 ngoài trời nắng nếu bạn không lắp kính lọc ND 55mm (hình sẽ cháy trắng xóa!). Ngoài nắng khép f/5.6–f/8 hoặc tăng tốc độ màn trập. Trong lớp/thư viện mở f/2.8–f/4 cực sáng, xóa phông mịn đẹp mà ISO vẫn thấp sạch nhiễu!"
      },
      {
        category: "3. Chống rung (Giữ trọn góc rộng 18mm)",
        setting: "SteadyShot: OFF (Tắt hoàn toàn trên ZV-E10)",
        why: "Sigma 18-50mm rộng nhất là 18mm (~27mm FF) và không có chống rung quang học — nhưng DJI RS 4 Mini đã chống rung siêu mượt! Tắt SteadyShot giúp KHÔNG bị crop khung hình 1.44x (giữ trọn góc rộng 18mm cho lớp học hẹp) và không bị méo rìa khi lia."
      },
      {
        category: "4. Độ phân giải, FPS & Chống sọc đèn lớp",
        setting: "Cảnh thoại: 4K 25fps (1/50s) | Cảnh B-roll/hành động: 1080p 50fps (1/100s)",
        why: "Điện Việt Nam là 50Hz: quay 25fps (tốc 1/50s) hoặc 50fps (tốc 1/100s) giúp đèn tuýp lớp học KHÔNG bị sọc nhấp nháy! B-roll quay 50fps về làm chậm (slow-motion) che lỗi bước chân cực tốt."
      },
      {
        category: "5. Kết nối Bluetooth DJI RS 4 Mini + Lấy nét",
        setting: "Bluetooth Rmt Ctrl: ON | AF-C + Eye AF (Human) | Picture Profile: OFF",
        why: "Ghép Bluetooth để bấm quay/dừng trực tiếp bằng nút đỏ trên tay cầm RS 4 Mini (không chạm vào máy làm rung!). Để màu Standard (PP OFF, Saturation +1), khóa White Balance 5200K–5500K. Chỉ bật Product Showcase khi quay cận sổ English Passport, xong tắt ngay."
      },
      {
        category: "6. Thu âm rõ tiếng Anh với ZV-E10 (Không mic rời)",
        setting: "Gắn mút lọc gió + Đứng gần 0.8–1.2m (18–24mm) + Mẹo điện thoại",
        why: "Mic trên ZV-E10 thu rất tốt ở khoảng cách 1m — nên khi quay thoại hãy dùng tiêu cự 18–28mm để đứng gần bé thay vì đứng xa zoom 50mm! Kèm 1 điện thoại bật app Ghi âm đặt trên bàn/cầm giấu thấp gần miệng bé để làm file tiếng dự phòng sắc nét."
      }
    ],
    gimbalMoves: [
      {
        id: "push-in",
        name: "Push-in (Đẩy thẳng tới)",
        mode: "RS 4 Mini: Gạt PF + Bóp giữ cò sau (Lock)",
        difficulty: "Rất dễ",
        how: "Gạt công tắc hông ở PF, khi bắt đầu đẩy máy thì BÓP GIỮ cò sau để khóa thẳng hướng ống kính (Lock). Bước chân Ninja tiến chậm 2–3 bước thẳng về phía học sinh. Xong thả cò ra.",
        useIn: "Cảnh 1, 2, 4, 5, 6 (cận sổ), 8, 11"
      },
      {
        id: "pull-out",
        name: "Pull-out (Đi lùi mở rộng)",
        mode: "RS 4 Mini: Gạt PF (hoặc giữ cò Lock) • 18–24mm",
        difficulty: "Trung bình",
        how: "Dùng tiêu cự 18–24mm để góc rộng dễ giữ nhân vật trong khung. Nhờ 1 thầy/cô đi sau lưng canh đường, bạn đi lùi đều theo nhịp bước chân bé tiến vào cổng trường hoặc cảnh kết sân trường.",
        useIn: "Cảnh 1 (cổng trường), Cảnh 9 (cầu thang), Cảnh 16 (kết)"
      },
      {
        id: "truck",
        name: "Truck / Slide (Trượt ngang bảng)",
        mode: "RS 4 Mini: Gạt PF + Bóp giữ cò sau (Lock) • 24mm",
        difficulty: "Dễ",
        how: "Bóp giữ cò sau RS 4 Mini để khóa ống kính nhìn vuông góc bức tường/bàn ăn, bước ngang chậm và đều từ trái sang phải. Cực kỳ mượt cho bảng English Corner và dãy khay cơm!",
        useIn: "Cảnh 4 (English Zone), Cảnh 7 (English Corners), Cảnh 13 (Bữa trưa)"
      },
      {
        id: "orbit",
        name: "Half-Orbit (Vòng cung 90°)",
        mode: "RS 4 Mini: Chế độ PF (thả cò) • 28–35mm f/2.8–f/4",
        difficulty: "Trung bình",
        how: "Thả cò ở chế độ PF (nếu có mô-đun Tracking RS 4 Mini thì bấm 1 lần vào cò để khóa theo nhân vật!). Đi vòng cung nhẹ quanh nhóm bé & cô giáo — kết hợp f/2.8 tạo chiều sâu xóa phông cực đã!",
        useIn: "Cảnh 5 (English Tree), Cảnh 6 (Passport), Cảnh 10 (Vườn), Cảnh 11"
      },
      {
        id: "tilt-reveal",
        name: "Tilt-up / Ngước máy (Dùng Joystick hoặc PTF)",
        mode: "RS 4 Mini: Gạt PTF hoặc đẩy nhẹ Joystick lên • 18mm",
        difficulty: "Dễ",
        how: "Để quay từ bậc cầu thang lên tường hoặc theo bóng rổ bay lên rổ: Đẩy nhẹ ngón cái lên cần Joystick của RS 4 Mini (mượt hơn bẻ cổ tay!) hoặc gạt công tắc hông sang PTF.",
        useIn: "Cảnh 1 (cổng trường), Cảnh 3 (chào cờ), Cảnh 9 (cầu thang), Cảnh 15 (bóng rổ)"
      },
      {
        id: "static-handheld",
        name: "Khóa tĩnh & Hạ thấp Briefcase (~1.1m)",
        mode: "RS 4 Mini: Bóp giữ cò (Lock) • Bấm đúp cò = Recenter",
        difficulty: "Rất dễ",
        how: "Cần đứng yên quay học sinh nói hoặc Split Screen 50/50? Chỉ cần bấm đúp cò sau cho máy thẳng tắp, rồi bóp giữ cò và ép khuỷu tay vào sườn! Nếu có tay cầm xách (Briefcase Handle) hãy lắp vào để quay ngang tầm mắt bé không bị mỏi lưng.",
        useIn: "Cảnh thoại Học sinh (Cảnh 1, 6, 16) & Hỏi đáp (Cảnh 2, 11)"
      }
    ],
    lightRules: [
      {
        situation: "Ngoài trời nắng (Cổng trường, Chào cờ, Vườn, Bóng rổ)",
        status: "TẮT ĐÈN • Khép khẩu f/5.6 – f/8",
        badge: "off",
        tip: "Đèn nhỏ không thắng được nắng. Quan trọng với Sigma 18-50mm f/2.8: vì không có kính lọc ND, ngoài nắng PHẢI khép khẩu về f/5.6–f/8 (hoặc vào bóng râm hiên nhà để mở f/3.5–f/4 xóa phông) kẻo bị cháy trắng hình!"
      },
      {
        situation: "Trong lớp học & Thư viện (Nhờ f/2.8 sáng hơn kit rất nhiều!)",
        status: "BẬT NHẸ 25% – 40% (5500K) • Khẩu f/2.8 – f/4",
        badge: "on",
        tip: "Ống Sigma f/2.8 thu sáng rất mạnh nên không cần bật đèn quá gắt! Chỉ bật 25–40% đặt chếch 45° bên mặt bé để khử bóng dưới mắt và tạo đốm sáng long lanh (catchlight) trong mắt. Tránh đứng quay ngược thẳng ra cửa sổ."
      },
      {
        situation: "Hành lang, Cầu thang, Phòng ăn bán trú",
        status: "BẬT 35% – 50% (5500K) • Khẩu f/2.8 – f/3.5",
        badge: "on",
        tip: "Đèn tuýp hành lang/phòng ăn chiếu từ trên xuống hay làm da mặt tái và tối hốc mắt. Đặt đèn LED nhỏ (gắn tản sáng mềm) ngang tầm mặt chếch 45° — kết hợp f/2.8 cho hình trong trẻo, ISO chỉ loanh quanh 400–800 cực mịn!"
      },
      {
        situation: "Quay cận đồ vật (English Passport, Lá cây, Bữa ăn)",
        status: "BẬT 25% – 35% góc nghiêng bên • 35–50mm f/2.8",
        badge: "optional",
        tip: "Sigma 18-50mm lấy nét rất gần (12cm ở 18mm, 30cm ở 50mm)! Chiếu đèn nhẹ nghiêng từ bên hông ở 35–50mm f/2.8 giúp chữ viết tay trên lá, nét bút ký English Passport và khay cơm nổi khối sắc nét, không bị lóa giấy bóng."
      }
    ],
    beginnerGoldenRules: [
      "CÂN RS 4 MINI Ở MỐC ZOOM ~30MM & TẬN DỤNG AUTO AXIS LOCKS: Vì Sigma 18-50mm thò đầu khi zoom, cân gimbal ở ~30mm sẽ giúp bạn đổi từ 18mm đến 50mm cả ngày không cần cân lại! Khi di chuyển giữa các lớp/cơ sở, bấm ngủ RS 4 Mini để 3 trục tự khóa an toàn trong 1 giây.",
      "KHÔNG MỞ f/2.8 NGOÀI NẮNG (NẾU KHÔNG CÓ ND FILTER): Trong nhà mở f/2.8–f/4 xóa phông siêu đẹp, nhưng bước ra sân nắng hãy xoay khẩu về f/5.6–f/8 (hoặc đẩy tốc màn trập cao lên) để bầu trời và áo trắng học sinh không bị cháy lóa!",
      "CHỈ CẦN NHỚ 3 THAO TÁC TRÊN DJI RS 4 MINI: Công tắc hông để sẵn PF • Muốn đẩy thẳng/trượt ngang/đứng tĩnh thì BÓP GIỮ CÒ SAU (Lock) • Lệch góc thì BẤM ĐÚP CÒ SAU (Recenter) • Quay/dừng bằng nút đỏ Bluetooth ngay trên tay cầm!",
      "HẠ THẤP NGANG TẦM MẮT HỌC SINH (~1.1M–1.2M): Giữ RS 4 Mini ngang bụng (hoặc dùng tay cầm xách Briefcase Handle) thay vì giơ cao ngang mắt người lớn — hình lập tức gần gũi và điện ảnh hơn gấp bội.",
      "QUY TẮC 3 GIÂY DƯ & CHỌN TIÊU CỰ RỒI MỚI BẤM REC: Không vừa quay vừa vặn vòng zoom Sigma (sẽ làm rung gimbal!). Chọn sẵn tiêu cự (18mm rộng / 28–35mm trung / 50mm cận), bấm REC đếm thầm 1-2-3 rồi mới hô diễn, xong đếm 1-2-3 mới dừng!"
    ]
  },

  connectionGuide: {
    techniques: [
      {
        name: "1. Match Cut (Cắt khớp động tác)",
        icon: "⚡",
        concept: "Học sinh Điểm chính và Phân hiệu cùng thực hiện 1 hành động giống hệt nhau → ghép nối ngay giữa động tác tạo cảm giác như 1 ngôi trường liền mạch.",
        howToShoot: "Nhìn vạch tiêu cự trên vòng lens Sigma 18-50mm! Ở Điểm chính quay ở đúng vạch 24mm (hoặc 35mm), ngang tầm mắt bé (~1.1m). Sang Phân hiệu vặn ĐÚNG vạch tiêu cự đó, cùng khoảng cách và cùng hướng di chuyển trái → phải.",
        bestScenes: "Cảnh 1 (bước qua cổng), Cảnh 5 (treo lá lên cây), Cảnh 8 (mở sách), Cảnh 11 (giơ tay), Cảnh 15 (chuyền bóng)"
      },
      {
        name: "2. Split Screen (Chia đôi màn hình 50/50)",
        icon: "🪟",
        concept: "Nửa trái là Điểm chính, nửa phải là Phân hiệu cùng xuất hiện song song — nhấn mạnh thông điệp 'Two Campuses – One Big Family'.",
        howToShoot: "Bật lưới 3x3 trên ZV-E10, vặn Sigma về 20–24mm (đừng đứng quá sát), bấm đúp cò RS 4 Mini cho thẳng máy rồi BÓP GIỮ CÒ (Lock) giữ tĩnh. Đặt học sinh CHÍNH GIỮA khung để cắt 50/50 không mất mặt hay tay!",
        bestScenes: "Cảnh 1 (Học sinh 2 cơ sở cùng nói câu chào), Cảnh 3 (2 sân trường cùng nhảy), Cảnh 16 (Kết bài 2 điểm trường)"
      },
      {
        name: "3. Voice Transition (Nối thoại giữa 2 cơ sở)",
        icon: "🎙️",
        concept: "Bạn A ở Điểm chính đọc nửa đầu câu (hoặc đặt câu hỏi), cắt ngay sang bạn B ở Phân hiệu đọc nửa sau (hoặc trả lời).",
        howToShoot: "Dùng tiêu cự 24–28mm để đứng gần học sinh (~1m) giúp mic ZV-E10 bắt tiếng Anh rõ ràng, đồng đều âm lượng giữa 2 cơ sở. Luôn quay dư 2 giây im lặng trước và sau mỗi câu thoại.",
        bestScenes: "Cảnh 1, Cảnh 4, Cảnh 5, Cảnh 6, Cảnh 7, Cảnh 9, Cảnh 16"
      },
      {
        name: "4. Montage (Chuỗi hình ngắn theo nhịp nhạc)",
        icon: "🎞️",
        concept: "Ghép liên tiếp các cú quay đẹp 1.5 – 2.5 giây (nụ cười, vỗ tay, bàn tay viết chữ, bóng bay vào rổ) đan xen giữa 2 cơ sở theo nhịp trống bài nhạc nền.",
        howToShoot: "Chuyển ZV-E10 sang 1080p 50fps + Sigma xoay 35–50mm f/2.8 (trong nhà/bóng râm) để quay thật nhiều cú cận mặt cười, cận tay thao tác xóa phông lung linh. Mỗi cú đi gimbal mượt 4–5 giây.",
        bestScenes: "Cảnh 3 (Chào cờ), Cảnh 6 (Ký hàng loạt hộ chiếu), Cảnh 12 (Ra chơi), Cảnh 14 (Âm nhạc), Cảnh 16 (Highlight kết)"
      },
      {
        name: "5. Subtitles (Phụ đề song ngữ Anh – Việt)",
        icon: "💬",
        concept: "Hiển thị chữ tiếng Anh ở trên, tiếng Việt nhỏ hơn bên dưới để phụ huynh và học sinh dễ theo dõi.",
        howToShoot: "KHI QUAY PHẢI CHỪA KHOẢNG TRỐNG PHÍA DƯỚI KHUNG HÌNH (~15% đáy màn hình)! Đừng căn miệng bé hay cuốn sổ English Passport quá sát cạnh dưới kẻo phụ đề che mất!",
        bestScenes: "Áp dụng cho TOÀN BỘ 16 phân cảnh"
      }
    ],
    shootingSchedule: [
      {
        time: "CHẶNG 1 • TRƯỜNG CHÍNH — Sáng Ngoài trời (07:20 – 09:00) • Tắt đèn LED",
        location: "Cây Tiếng Anh → Sân chào cờ (07:40) → Cổng trường (08:10) → Sân bóng rổ → Vườn trường",
        scenes: "① PC 05 ⭐ Cây Tiếng Anh (Cô Ngân • 07:20) → ② PC 03 Chào cờ + KẾT (Cô Hạnh, Cô Tần • 07:40 đúng chuông xuống sân) → ③ PC 01 Cổng trường (Cô Ngân • 08:10 vãn phụ huynh) → ④ PC 15 Bóng rổ (Cô Thủy Tiên • 08:25) → ⑤ PC 10 Vườn & Thu pin (Cô Đạm • 08:45)",
        tip: "Quay PC 01 Cổng trường lúc 08:10 sau khi phụ huynh đưa đón đã vãn hẳn để cổng vắng sạch, không còi xe mà nắng sớm vẫn dịu đẹp! Sigma f/5.6–f/8 ngoài nắng, f/2.8–f/4 bóng râm."
      },
      {
        time: "CHẶNG 2 • TRƯỜNG CHÍNH — Sáng Trong nhà & English Zone cuối sáng (09:00 – 11:00) • Bật đèn 30–35%",
        location: "Cầu thang & tường khẩu hiệu → Lớp học → Hành lang → Thư viện (gộp Cảnh R5) → English Zone",
        scenes: "⑥ PC 09 Cầu thang & tường khẩu hiệu (Cô Đạm • 09:00) → ⑦ PC 02 Chào đầu giờ (Cô Thảo • 09:15) → ⑧ PC 07 English Corner (Cô Nhung • 09:30) → ⑨ PC 06 ⭐ English Passport (Cô Ngân • 09:45) → ⑩ PC 08 Thư viện (Cô Cúc, Cô Trang • 10:10) → ⑪ Cảnh R5 Tổ chuyên môn (Cô Cúc, Cô Trang, Cô Ngân • 10:25) → ⑫ PC 04 ⭐ English Zone cuối sáng (Cô Cúc • 10:45)",
        tip: "Cảnh R5 quay gọn ngay tại Thư viện sau PC 08 (không cần thu thoại vì chạy dưới Lời bình VO), sau đó Cô Cúc ra quay luôn PC 04 English Zone cuối buổi sáng!"
      },
      {
        time: "CHẶNG 3 • TRƯỜNG CHÍNH — Trưa Bán trú (11:05) & LỚP OIC Bắt buộc chiều (14:25 – 15:00)",
        location: "Phòng ăn bán trú → Nghỉ trưa SẠC ĐẦY PIN → Phòng học Lớp OIC (Sink & Float)",
        scenes: "⑬ PC 13 Bán trú (Cô Thủy Tiên • 11:05–11:50, quay khay cơm TRƯỚC khi ăn 5 phút) → [Nghỉ trưa sạc pin] → ⑭ LỚP OIC ⭐ Thí nghiệm Sink & Float (GV & Trợ giảng OIC • 14:25–15:00)",
        tip: "Lớp OIC: Bắt buộc dùng bát/chậu nhựa TRONG SUỐT để quay ngang 50mm f/2.8 thấy rõ vật chìm/nổi! Thả thử trước 8 vật & sửa câu thoại bỏ 'filled with air' cho bút chì/thước nhựa (dùng 'because it is light')."
      },
      {
        time: "CHẶNG 4 • PHÂN HIỆU — Sáng Thứ 2, ngày 30/11 (07:40 – 10:30)",
        location: "Sân Chào cờ (07:40) → Cây Tiếng Anh → Sân ra chơi → Lớp học → Phòng Âm nhạc → Hành lang",
        scenes: "⑮ PC 03 Chào cờ sáng T2 + KẾT Phân hiệu (Cô Lan, Cô Lam, Cô Hạnh, Cô Tần • 07:40) → ⑯ PC 05 ⭐ Cây Tiếng Anh (Cô Lan, Cô Lam • 08:15) → ⑰ PC 12 Giờ ra chơi (Cô Lan, Cô Lam • 08:35) → ⑱ PC 11 ⭐ Tiết TN&XH (Cô Lan, Cô Lam • 08:55) → ⑲ PC 14 ⭐ Tiết Âm nhạc (Cô Phương • 09:25) → ⑳ PC 06 ⭐ Passport (Cô Lan, Cô Lam • 09:55)",
        tip: "Quay trọn buổi sáng T2 30/11 cực thong thả: đúng 07:40 Chào cờ đầu tuần, xong sạch 3 cảnh ngoài trời trước 09:00 nắng gắt rồi vào lớp quay PC 11, PC 14 và kết thúc trước 10:30!"
      }
    ]
  },

  scenes: [
    {
      id: 1,
      code: "PC 01",
      title: "A New Week – A New Journey",
      vnTitle: "Tuần mới – Hành trình mới",
      duration: "45 giây",
      durationSec: 45,
      image: "./images/scene-01.jpg",
      location: "Ngoài trời — Cổng trường & Sân trường",
      environment: "outdoor",
      isHighlight: false,
      needsSlowMo: true,
      needsLight: false,
      lightStatus: "Tắt đèn (Dùng nắng sáng sớm)",
      zve10Config: "Sigma 18–24mm • Khẩu f/5.6–f/8 (ngoài nắng) / f/4 (bóng râm) • 4K 25p (thoại) & 1080p 50p (đi cổng) • SteadyShot OFF",
      gimbalMode: "RS 4 Mini: PF đi lùi (Pull-out) & Giữ cò Lock (lời dẫn)",
      gimbalIcon: "pull-out",
      connectionType: "Split Screen + Match Cut",
      connectionTip: "Cố định vạch **24mm** trên Sigma ở cả 2 cơ sở! Quay bạn A (Điểm chính) & bạn B (Phân hiệu) cùng bước vào cổng để Match Cut. Đoạn cuối 2 bạn cùng nói câu chào → đứng giữa khung, bấm đúp cò RS 4 Mini rồi bóp giữ cò Lock để ghép Split Screen 50/50!",
      beginnerTip: "Vì Sigma rộng nhất là **18mm** (không phải 16mm), hãy đứng lùi thêm 1–2 bước trước cổng trường để lấy trọn bảng tên trường! Giữ RS 4 Mini ngang bụng (~1.1m) cho ngang tầm mắt 2 bé. Khi đi lùi (Pull-out), nhờ 1 thầy/cô đi sau lưng nhắc đường để khỏi vấp!",
      shots: [
        {
          id: "s1-1",
          campus: "Cả 2 cơ sở",
          framing: "Toàn cảnh (Sigma 18mm • f/7.1)",
          move: "RS 4 Mini gạt PTF (hoặc đẩy nhẹ Joystick lên) từ sân lên bảng tên trường",
          desc: "Quay toàn cảnh cổng trường Điểm chính (nắng sáng, cây xanh), sau đó quay góc tương tự tại cổng Phân hiệu."
        },
        {
          id: "s1-2",
          campus: "Điểm chính → Phân hiệu",
          framing: "Trung cảnh (Sigma 24mm • f/5.6)",
          move: "RS 4 Mini chế độ PF đi lùi mượt (1080p 50fps slow-mo nhẹ)",
          desc: "Student A (điểm chính) đeo ba lô tươi cười bước qua cổng → Match cut sang Student B (phân hiệu) bước vào sân trường, giáo viên mỉm cười vẫy tay đón."
        },
        {
          id: "s1-3",
          campus: "Cả 2 cơ sở (Đan xen)",
          framing: "Trung cận (Sigma 28mm • f/4 bóng râm)",
          move: "RS 4 Mini bóp giữ cò (Lock tĩnh) — nhân vật chính giữa khung",
          desc: "Quay lời dẫn của Student A và Student B đứng hướng thẳng máy quay, hậu cảnh sân trường sáng sủa (đứng bóng râm để mở được f/4 xóa phông đẹp!). Chừa khoảng trống 2 bên để câu cuối ghép Split Screen đôi."
        }
      ],
      dialogue: [
        { speaker: "Student A (Điểm chính)", text: "\"Hello, everyone! A new week is here! Welcome to Dai Mo Primary School!\"" },
        { speaker: "Student B (Phân hiệu)", text: "\"Here, every school day is full of happiness, friendship and exciting discoveries!\"" },
        { speaker: "Student A", text: "\"Our school is a happy place where we learn, play and grow together.\"" },
        { speaker: "Student B", text: "\"English is our second language. We use English not only in English lessons but also in many other subjects and daily activities.\"" },
        { speaker: "Cả 2 bạn (Split Screen)", text: "\"Welcome to our school! Let's explore our English journey together!\"" },
        { speaker: "Chữ trên màn hình", text: "DAI MO PRIMARY SCHOOL – HAPPY SCHOOL, ENGLISH EVERY DAY!", isCaption: true }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Mở đầu cổng trường & 2 bé bước vào (RS 4 Mini Pull-out)",
          motionVi: "RS 4 Mini đặt thấp ngang tầm mắt học sinh (~1.1m), đi lùi chậm và mượt ở tiêu cự 24mm trước mặt học sinh đeo ba lô tươi cười bước qua cổng trường nắng sáng.",
          prompt: "Cinematic documentary gimbal tracking shot pulling backward smoothly at eye level (1.1m height), shot on Sony ZV-E10 with Sigma 18-50mm lens at 24mm f/5.6, bright natural morning sunlight. Two cheerful 9-year-old Vietnamese primary school students wearing crisp white collared school shirts, red pioneer scarves, and colorful backpacks walk joyfully through a sunlit Vietnamese public primary school gate lined with lush green trees. Warm golden morning flare, smiling teacher greeting students in soft background bokeh, natural realistic colors, smooth DJI RS 4 Mini stabilizer motion, 16:9."
        },
        {
          label: "Cú máy 2: Học sinh chào mở đầu đứng giữa khung (Chuẩn bị Split Screen)",
          motionVi: "RS 4 Mini khóa tĩnh (Lock) hoặc đẩy rất nhẹ, học sinh đứng chính giữa khung hình ở tiêu cự 28mm f/4 (trong bóng râm nhẹ) nhìn thẳng ống kính nói tự tin, sân trường phía sau xóa phông mềm.",
          prompt: "Steady medium close-up shot with subtle slow gimbal push-in, centered framing leaving balanced left and right space for split-screen editing. A confident smiling 9-year-old Vietnamese primary school student in a white school shirt and red scarf stands in soft open shade speaking enthusiastically directly into the camera in a sunny Vietnamese school courtyard. Pleasant f/4 shallow depth of field, bright natural daylight, authentic documentary look on Sony ZV-E10 Sigma 28mm, 16:9."
        }
      ]
    },
    {
      id: 2,
      code: "PC 02",
      title: "Good Morning, Teacher!",
      vnTitle: "Chào buổi sáng cô giáo!",
      duration: "30 giây",
      durationSec: 30,
      image: "./images/scene-02.jpg",
      location: "Trong nhà — Lớp học 2 điểm trường",
      environment: "indoor",
      isHighlight: false,
      needsSlowMo: false,
      needsLight: true,
      lightStatus: "Bật đèn nhẹ 30% (5500K, góc 45°) — f/2.8–f/3.5 rất sáng!",
      zve10Config: "Sigma 18–35mm • Khẩu f/3.5 (toàn lớp) & f/2.8 (cận bé) • 4K 25p (1/50s chống sọc đèn) • Khóa WB 5200K",
      gimbalMode: "RS 4 Mini: Chế độ PF lia theo cô + Giữ cò Lock đẩy cận bé",
      gimbalIcon: "push-in",
      connectionType: "Voice Transition + Match Cut",
      connectionTip: "Cảnh cả lớp Điểm chính đồng thanh 'Yes, we are!' → cắt mượt sang cô giáo Phân hiệu hỏi 'What's the day today?' để giữ liền mạch năng lượng đầu giờ.",
      beginnerTip: "Trong lớp hẹp, vặn Sigma về **18mm** và **tắt SteadyShot** để góc đủ rộng lấy cả cô giáo và các dãy bàn! Nhờ **f/2.8–f/3.5** thu sáng cực tốt, bạn chỉ cần bật đèn LED nhỏ nhẹ **30%** đặt lệch 45° cho da mặt tươi sáng. Đặt 1 điện thoại ghi âm trên bàn giáo viên để thu rõ tiếng cô và cả lớp.",
      shots: [
        {
          id: "s2-1",
          campus: "Điểm chính",
          framing: "Trung rộng (Sigma 18mm • f/3.5)",
          move: "RS 4 Mini chế độ PF lia theo cô bước từ cửa vào bục giảng",
          desc: "Cô giáo mỉm cười bước vào lớp, cả lớp đồng loạt đứng dậy vẫy tay chào 'Good morning, teacher!'."
        },
        {
          id: "s2-2",
          campus: "Điểm chính",
          framing: "Trung cận (Sigma 35mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock — Push-in thật chậm",
          desc: "Quay phản ứng cận nụ cười háo hức xóa phông mềm của 2–3 học sinh bàn đầu giơ tay đáp lại 'We're great, thank you!' và 'Yes, we are!'."
        },
        {
          id: "s2-3",
          campus: "Phân hiệu",
          framing: "Trung cảnh 2 góc (Sigma 24–35mm • f/3.5)",
          move: "RS 4 Mini giữ cò Lock + lia nhẹ PF",
          desc: "Cô giáo Phân hiệu chỉ tay lên góc ngày tháng trên bảng hỏi 'What's the day today?', cắt sang bé đứng lên trả lời dõng dạc 'Today is Monday!'."
        }
      ],
      dialogue: [
        { speaker: "Teacher (Điểm chính)", text: "\"Good morning, class!\"" },
        { speaker: "Students", text: "\"Good morning, teacher!\"" },
        { speaker: "Teacher", text: "\"How are you today?\"" },
        { speaker: "Students", text: "\"We're great, thank you! How about you?\"" },
        { speaker: "Teacher", text: "\"I'm wonderful! Are you ready to learn?\"" },
        { speaker: "Students", text: "\"Yes, we are!\"" },
        { speaker: "Teacher (Phân hiệu)", text: "\"What's the day today?\"" },
        { speaker: "Student (Phân hiệu)", text: "\"Today is Monday!\"" },
        { speaker: "Teacher (Phân hiệu)", text: "\"Excellent! Let's have a wonderful day!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy chính: Cô bước vào & cả lớp đứng chào hào hứng",
          motionVi: "RS 4 Mini chế độ PF tiêu cự rộng 18mm lia mượt từ cửa lớp theo cô giáo bước tới bục giảng, mở góc thấy cả lớp học sinh đồng loạt đứng dậy vẫy tay cười rạng rỡ.",
          prompt: "Smooth DJI RS 4 Mini gimbal pan-follow medium-wide shot inside a bright, tidy Vietnamese primary school classroom with wooden desks, green chalkboard, and morning sunlight from side windows. A friendly Vietnamese female teacher walks warmly to the front greeting the class, as enthusiastic 9-year-old Vietnamese students in white shirts and red scarves stand up smiling and waving hello. Soft 5500K fill light illuminating faces naturally, crisp realistic documentary look on Sony ZV-E10 Sigma 18mm f/3.5, 16:9."
        },
        {
          label: "Cú máy cận: Cận cảnh nụ cười tương tác cô và trò (35mm f/2.8)",
          motionVi: "RS 4 Mini giữ cò Lock đẩy thật chậm vào nhóm học sinh bàn đầu ở 35mm f/2.8 xóa phông mềm hậu cảnh lớp học, các bé tươi cười giơ tay trả lời tiếng Anh tự tin.",
          prompt: "Gentle slow gimbal push-in medium close-up at 35mm f/2.8 with creamy classroom bokeh of cheerful Vietnamese primary school children at wooden desks wearing white uniforms and red scarves, raising hands eagerly and smiling brightly while speaking English. Soft natural window light plus subtle warm fill, crisp Sony Eye-AF focus on smiling eyes, Sony ZV-E10 Sigma 18-50mm f/2.8, 16:9."
        }
      ]
    },
    {
      id: 3,
      code: "PC 03",
      title: "English in Our School Assembly",
      vnTitle: "Tiếng Anh trong giờ Chào cờ",
      duration: "50 giây",
      durationSec: 50,
      image: "./images/scene-03.jpg",
      location: "Ngoài trời — Sân trường (Chào cờ đầu tuần)",
      environment: "outdoor",
      isHighlight: false,
      needsSlowMo: true,
      needsLight: false,
      lightStatus: "Tắt đèn (Quay ngoài trời nắng sáng)",
      zve10Config: "Sigma 18–50mm • Khẩu f/5.6–f/8 (ngoài nắng!) • 4K 25p (cô TPT) & 1080p 50p (học sinh nhảy)",
      gimbalMode: "RS 4 Mini: PF góc thấp (Briefcase Handle) lướt dọc lối đi giữa các hàng",
      gimbalIcon: "tilt-reveal",
      connectionType: "Split Screen + Montage nhịp nhạc",
      connectionTip: "Cảnh kết 50 giây: Ghép Split Screen 2 sân trường (Điểm chính bên trái, Phân hiệu bên phải) cùng vỗ tay nhảy theo nhạc bài 'If You're Happy and You Know It'!",
      beginnerTip: "Ngoài sân trường nắng sáng, nhớ **khép khẩu Sigma về f/5.6 – f/8** để bầu trời và áo trắng học sinh không bị cháy lóa! Để quay cảnh chào cờ không bị nhàm, hãy để **18mm**, gắn tay cầm xách (hoặc hạ thấp RS 4 Mini ngang ngực bé) rồi đi lướt dọc giữa lối đi 2 hàng lớp — trông sống động như phim truyền hình!",
      shots: [
        {
          id: "s3-1",
          campus: "Điểm chính",
          framing: "Toàn sân (18mm f/7.1) → Trung cô TPT (50mm f/5.6)",
          move: "RS 4 Mini chế độ PF pan chậm quét sân → Giữ cò Lock quay cô TPT cầm micro",
          desc: "Mở toàn cảnh sân trường nắng sớm đầy học sinh áo trắng khăn quàng đỏ; zoom 50mm cắt vào cô Tổng phụ trách nhiệt huyết đặt câu hỏi và hô hiệu lệnh 'Happy!' / 'Excited!'."
        },
        {
          id: "s3-2",
          campus: "Cả 2 cơ sở",
          framing: "Trung rộng góc thấp (Sigma 18mm • f/6.3)",
          move: "RS 4 Mini chế độ PF đi trượt nhanh nhẹ (1080p 50fps slow-mo) dọc lối đi",
          desc: "Quay khoảnh khắc các bé cười thật tươi khi nghe 'Happy', vỗ tay rào rào khi nghe 'Excited', và nhún nhảy theo nhạc."
        },
        {
          id: "s3-3",
          campus: "Phân hiệu → Ghép 2 cơ sở",
          framing: "Rộng từ ban công tầng 2 (18mm f/8) hoặc góc thấp rộng",
          move: "RS 4 Mini đẩy nhẹ Joystick Tilt-up mở rộng",
          desc: "Cô TPT Phân hiệu hô 'Can you sing with me?' → Kết cảnh toàn thể 2 sân trường cùng vẫy tay cười tươi."
        }
      ],
      dialogue: [
        { speaker: "Cô TPT (Điểm chính)", text: "\"Good morning, everyone! How are you feeling today?\"" },
        { speaker: "Students", text: "\"We are happy! We are excited!\"" },
        { speaker: "Cô TPT", text: "\"That's wonderful! Are you ready for our English challenge?\"" },
        { speaker: "Students", text: "\"Yes! Let's go!\"" },
        { speaker: "Cô TPT", text: "\"Let's play a quick game! When I say 'Happy', show me your biggest smile! When I say 'Excited', clap your hands!\"" },
        { speaker: "Cô TPT", text: "\"Fantastic! Now, let's sing and dance together!\"" },
        { speaker: "Cô TPT (Phân hiệu)", text: "\"Hello, everyone! Can you sing with me?\"" },
        { speaker: "Students (Phân hiệu)", text: "\"Yes, we can!\"" },
        { speaker: "Gợi ý nhạc nền", text: "If You're Happy and You Know It / Count on Me (nhịp vui tươi tập thể)", isCaption: true }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Lướt dọc hàng học sinh vỗ tay & nhảy (RS 4 Mini Low-angle)",
          motionVi: "RS 4 Mini đặt thấp ngang ngực học sinh ở tiêu cự rộng 18mm, lướt mượt dọc theo lối đi giữa các hàng ghế sân trường khi hàng trăm em cùng giơ tay vỗ và cười tươi rạng rỡ.",
          prompt: "Dynamic low-angle DJI RS 4 Mini gimbal glide moving smoothly down an aisle between neat rows of joyful Vietnamese primary school students in white uniforms and red scarves during a sunny Monday morning assembly. Children enthusiastically clapping hands, smiling brightly, and dancing to upbeat music under leafy green courtyard trees. Bright crisp morning sunlight, gentle 50fps slow-motion feel, energetic documentary cinematography on Sony ZV-E10 Sigma 18mm f/6.3, 16:9."
        },
        {
          label: "Cú máy 2: Toàn cảnh kết hợp vẫy tay tập thể",
          motionVi: "Máy quay mở rộng góc 18mm từ ban công tầng 2 (hoặc giơ cao RS 4 Mini) lia chậm toàn sân trường đầy năng lượng, học sinh đồng loạt vẫy tay hướng ống kính.",
          prompt: "Uplifting high-angle wide gimbal pan across a sunny Vietnamese primary school courtyard packed with hundreds of smiling primary students in white shirts and red scarves waving enthusiastically toward the camera with their teachers at the front. Vibrant morning daylight, clear sky, festive joyful atmosphere, realistic Sony ZV-E10 Sigma 18mm f/8 wide shot, 16:9."
        }
      ]
    },
    {
      id: 4,
      code: "PC 04",
      title: "Discover Our English Zone",
      vnTitle: "Khám phá không gian English Zone",
      duration: "40 giây",
      durationSec: 40,
      image: "./images/scene-04.jpg",
      location: "Khu English Zone (Hành lang / Sân có mái che)",
      environment: "outdoor",
      isHighlight: true,
      needsSlowMo: true,
      needsLight: false,
      lightStatus: "Tắt (nếu ngoài sáng) • Bật 25% nếu dưới mái che râm",
      zve10Config: "Sigma 18–50mm • Khẩu f/3.5–f/4 (mái che râm) & f/2.8 (cận thẻ từ) • 4K 25p & 1080p 50p",
      gimbalMode: "RS 4 Mini: PF bước vào + Giữ cò Lock trượt ngang + Half-Orbit",
      gimbalIcon: "truck",
      connectionType: "Voice Transition + B-roll đan xen 2 cơ sở",
      connectionTip: "⭐ ĐIỂM NHẤN CẦN ĐẦU TƯ: Đừng chỉ quay bảng biểu trống trơn! Dùng **Sigma 50mm f/2.8** quay cận bàn tay bé xoay vòng quay từ vựng, lật thẻ tranh 'butterfly' xóa phông lung linh và nét mặt hào hứng của nhóm bạn chơi thật sự.",
      beginnerTip: "Sigma 18-50mm có khoảng cách lấy nét siêu gần (**12cm ở 18mm, 30cm ở 50mm**) nên quay cận thẻ Flashcard 'butterfly' sắc nét vô cùng! Nhớ bật nút **Product Showcase** trên ZV-E10 cho riêng cú bé giơ thẻ ra trước máy, quay xong bấm tắt ngay để máy bắt lại mắt học sinh.",
      shots: [
        {
          id: "s4-1",
          campus: "Điểm chính → Phân hiệu",
          framing: "Trung rộng (Sigma 20mm • f/4)",
          move: "RS 4 Mini chế độ PF đi theo từ sau vai rồi vòng sang trước",
          desc: "Student A (Điểm chính) đi vào khu English Zone chỉ tay hào hứng: 'Look! This is our English Zone!' → nối sang Student B (Phân hiệu)."
        },
        {
          id: "s4-2",
          campus: "Cả 2 cơ sở",
          framing: "Cận cảnh xóa phông (Sigma 45–50mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock — trượt ngang chậm (1080p 50fps)",
          desc: "Cận bàn tay xoay vòng quay từ vựng, ghép chữ cái, giải câu đố — quay mỗi góc trò chơi 4–5 giây để dựng Montage sinh động."
        },
        {
          id: "s4-3",
          campus: "Cả 2 cơ sở",
          framing: "Trung cận nhóm 3–4 bé (Sigma 28mm • f/3.5)",
          move: "RS 4 Mini chế độ PF đi vòng cung nhẹ (Half-Orbit) quanh bàn chơi",
          desc: "Nhóm học sinh chơi đoán tranh: Bé 1 giơ thẻ hỏi 'What's this?', bé 2 cười reo 'It's a butterfly!', cả nhóm vỗ tay 'Great job!'."
        }
      ],
      dialogue: [
        { speaker: "Student A (Điểm chính)", text: "\"Look! This is our English Zone!\"" },
        { speaker: "Student B (Phân hiệu)", text: "\"It's a fun place where we learn English through games and activities every day.\"" },
        { speaker: "Student A", text: "\"We can play word games, solve puzzles and learn new vocabulary.\"" },
        { speaker: "Student B", text: "\"Learning English is easy and fun when we learn together!\"" },
        { speaker: "Nhóm học sinh chơi", text: "\"What's this?\" — \"It's a butterfly!\" — \"Great job!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Trượt ngang (Truck) khám phá khu English Zone sống động",
          motionVi: "RS 4 Mini giữ cò Lock trượt ngang đều từ trái sang phải ở tiêu cự 24mm f/4 qua các góc trò chơi màu sắc, thấy các nhóm học sinh hào hứng xoay vòng quay từ vựng và ghép thẻ.",
          prompt: "Smooth lateral DJI RS 4 Mini gimbal trucking shot moving left to right through a colorful, lively shaded outdoor English Zone at a Vietnamese primary school. Groups of 9-year-old Vietnamese students in white school uniforms and red scarves gather around a bright vocabulary spinning wheel, word puzzle boards, and picture flashcards, pointing and laughing naturally. Bright open-shade daylight, crisp focus, creamy depth of field, Sony ZV-E10 Sigma 24mm f/3.5, 16:9."
        },
        {
          label: "Cú máy 2: Cận cảnh tương tác thẻ từ 'Butterfly' (35mm f/2.8)",
          motionVi: "RS 4 Mini chế độ PF đi vòng cung nhẹ ở góc trung cận 35mm f/2.8 xóa phông mềm khi một bạn giơ thẻ tranh con bướm lên hỏi và các bạn xung quanh hào hứng giơ tay trả lời.",
          prompt: "Intimate half-orbit gimbal medium close-up around a small group of smiling Vietnamese primary school kids playing an English flashcard game. One child holds up a colorful butterfly flashcard asking a question while classmates lean in pointing and clapping happily. Soft natural daylight, rich authentic colors, creamy f/2.8 bokeh transitioning smoothly to the flashcard and smiling faces, Sony ZV-E10 Sigma 35mm f/2.8, 16:9."
        }
      ]
    },
    {
      id: 5,
      code: "PC 05",
      title: "Our English Tree",
      vnTitle: "Cây Tiếng Anh của chúng em",
      duration: "35 giây",
      durationSec: 35,
      image: "./images/scene-05.jpg",
      location: "Ngoài trời / Sảnh — Khu vực Cây Tiếng Anh",
      environment: "outdoor",
      isHighlight: true,
      needsSlowMo: true,
      needsLight: false,
      lightStatus: "Tắt (dưới tán cây râm mát) • Bật 25% nghiêng hông nếu trong sảnh",
      zve10Config: "Sigma 35–50mm • Khẩu f/2.8 (dưới tán râm, xóa phông đỉnh cao!) • 4K 25p & 1080p 50p",
      gimbalMode: "RS 4 Mini: PF Half-Orbit quanh cây + Giữ cò Lock đẩy cận chiếc lá",
      gimbalIcon: "orbit",
      connectionType: "Match Cut treo lá cuối cùng",
      connectionTip: "⭐ ĐIỂM NHẤN CẦN ĐẦU TƯ: Cảnh này là sân khấu khoe sức mạnh **Sigma 50mm f/2.8**! Cảnh kết cực đắt giá — quay bé A (Điểm chính) đưa tay treo chiếc lá lên cành ở 50mm f/2.8 xóa phông mù mịt → Match Cut sang bé B (Phân hiệu) buông tay ra cười rạng rỡ!",
      beginnerTip: "Kê Cây Tiếng Anh ở vùng **bóng râm dưới tán cây hoặc hiên sảnh** để bạn mở trọn khẩu **f/2.8 ở 50mm** mà không bị cháy sáng! Đứng cách chiếc lá ~1–1.2m: phông nền sân trường phía sau sẽ biến thành đốm sáng bokeh tròn lung linh cực kỳ chuyên nghiệp! Nhớ viết chữ bút dạ ĐẬM, TO để lên hình đọc rõ.",
      shots: [
        {
          id: "s5-1",
          campus: "Cả 2 cơ sở",
          framing: "Trung rộng (Sigma 24mm • f/3.5)",
          move: "RS 4 Mini kéo nhẹ Joystick Tilt-down từ tán cây nhiều lá màu xuống các bạn học sinh",
          desc: "Giới thiệu cây xanh phủ đầy lá giấy rực rỡ. Student A và Student B lần lượt dẫn chuyện giới thiệu ý nghĩa của cây."
        },
        {
          id: "s5-2",
          campus: "Cả 2 cơ sở",
          framing: "Cận cảnh bokeh mịn (Sigma 50mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock — Push-in cực chậm (1080p 50fps slow-mo)",
          desc: "Quay cận đầu bút viết thông điệp lên lá giấy; cận từng chiếc lá đung đưa nhẹ trong gió có chữ: 'Be kind!', 'Keep smiling!', 'Never give up!', 'Dream big!'."
        },
        {
          id: "s5-3",
          campus: "Cả 2 cơ sở (Đan xen nhanh)",
          framing: "Chân dung cận mặt (Sigma 50mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock tĩnh",
          desc: "6 học sinh khác nhau lần lượt cầm chiếc lá ngang vai, mỉm cười nhìn máy đọc to từng thông điệp ngắn. Kết cảnh các bạn học sinh cùng gắn chiếc lá cuối."
        }
      ],
      dialogue: [
        { speaker: "Student A", text: "\"Welcome to Our English Tree!\"" },
        { speaker: "Student B", text: "\"This tree is special. It is full of our English dreams and messages.\"" },
        { speaker: "Student A", text: "\"We write kind words, good wishes and positive messages on the leaves.\"" },
        { speaker: "Student B", text: "\"Let's make our tree greener with English!\"" },
        { speaker: "6 Học sinh đọc nối tiếp", text: "\"Be kind!\" • \"Keep smiling!\" • \"Never give up!\" • \"I love my school!\" • \"English is fun!\" • \"Dream big!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Cận cảnh treo chiếc lá thông điệp (Sigma 50mm f/2.8 Slow-mo)",
          motionVi: "RS 4 Mini vòng cung chậm (PF orbit) kết hợp đẩy nhẹ ở tiêu cự 50mm f/2.8 vào 2 bàn tay nhỏ treo chiếc lá giấy xanh ghi chữ 'Dream big!' lên cành, nền sau xóa phông bokeh lung linh.",
          prompt: "Dreamy 50fps slow-motion DJI RS 4 Mini gimbal medium close-up orbiting gently around a lush school courtyard tree decorated with colorful paper leaves featuring neat handwritten English quotes like 'Be kind!' and 'Dream big!'. Two smiling 9-year-old Vietnamese students in white uniforms and red scarves hang a bright green paper leaf onto a branch in soft dappled shade. Ultra-creamy f/2.8 round sunlight bokeh in the background, Sony ZV-E10 Sigma 50mm f/2.8, 16:9."
        },
        {
          label: "Cú máy 2: Chùm chân dung học sinh cầm lá đọc thông điệp (50mm f/2.8)",
          motionVi: "RS 4 Mini giữ cò Lock tĩnh tuyệt đối ở 50mm f/2.8 xóa phông mù mịt, học sinh giơ chiếc lá giấy ngang má và mỉm cười rạng rỡ đọc to thông điệp tiếng Anh vào ống kính.",
          prompt: "Crisp shallow-depth-of-field portrait close-up with steady gimbal lock. A joyful 9-year-old Vietnamese primary student in a white shirt and red scarf stands beside a leaf-decorated tree in soft shade, holding up a colorful paper leaf reading 'Keep smiling!' near their cheek and speaking cheerfully directly to the camera. Creamy f/2.8 green foliage bokeh, natural skin tones, Sony ZV-E10 Sigma 50mm f/2.8, 16:9."
        }
      ]
    },
    {
      id: 6,
      code: "PC 06",
      title: "English Passport – Speak English, Get a Signature!",
      vnTitle: "Hộ chiếu Tiếng Anh – Nói tiếng Anh, nhận chữ ký!",
      duration: "55 giây",
      durationSec: 55,
      image: "./images/scene-06.jpg",
      location: "Hành lang / Sân trường (Giao lưu cùng thầy cô)",
      environment: "indoor",
      isHighlight: true,
      needsSlowMo: true,
      needsLight: true,
      lightStatus: "Bật đèn nhẹ 25–30% (hành lang) • Tắt nếu ngoài sân sáng",
      zve10Config: "Sigma 28–50mm • Khẩu f/3.5 (hội thoại 2 người) & f/2.8 (cận ký sổ!) • BẬT Product Showcase cho cú cận sổ!",
      gimbalMode: "RS 4 Mini: PF theo bé bước tới + Giữ cò Lock cận nét bút ký",
      gimbalIcon: "orbit",
      connectionType: "Song song 2 cơ sở + Montage khoe chữ ký & trao giải",
      connectionTip: "⭐ ĐIỂM NHẤN SỐ 1 CỦA TOÀN VIDEO (55 giây)! Dùng **Sigma 28mm f/3.5** cho cảnh 2 người (để cả cô và bé cùng sắc nét!) rồi vặn lên **50mm f/2.8** quay cú SIÊU CẬN đầu bút cô ký & đóng dấu lên trang sổ English Passport — nét căng như phim quảng cáo!",
      beginnerTip: "Khi quay hội thoại 2 người ở hành lang, chọn **Sigma 28mm f/3.5** (đừng mở f/2.8 kẻo bé nét mà cô mờ!) và đứng cách 2 người ~1m + nhờ người giữ điện thoại ghi âm thấp dưới khung hình. Khi chuyển sang cú cận bìa sổ 'ENGLISH PASSPORT' (50mm f/2.8), nhớ bấm bật **Product Showcase** trên ZV-E10 để nét dính chặt vào trang sổ!",
      shots: [
        {
          id: "s6-1",
          campus: "Điểm chính",
          framing: "Trung 2 nhân vật (Sigma 28mm • f/3.5)",
          move: "RS 4 Mini chế độ PF đi nhẹ theo Student A bước đến gặp cô, dừng lấy khung 2 người",
          desc: "Student A cầm sổ English Passport bước lại hỏi cô về sở thích tiếng Anh và món ăn yêu thích ('chicken'), rồi xin chữ ký."
        },
        {
          id: "s6-2",
          campus: "Cả 2 cơ sở",
          framing: "Siêu cận điện ảnh (Sigma 50mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock — Push-in thật chậm (50fps) • Bật Product Showcase",
          desc: "Quay rõ bìa sổ 'ENGLISH PASSPORT', cận bàn tay giáo viên ký tên/đóng dấu 'Well done!' và cận trang hộ chiếu kín đặc chữ ký các thầy cô."
        },
        {
          id: "s6-3",
          campus: "Phân hiệu",
          framing: "Trung 2 nhân vật (Sigma 28mm • f/3.5)",
          move: "RS 4 Mini chế độ PF Half-Orbit nhẹ sang góc thấy mặt cô & bé B",
          desc: "Student B hỏi cô giáo Phân hiệu về môn học yêu thích ('Music') và xin chữ ký."
        },
        {
          id: "s6-4",
          campus: "Cả 2 cơ sở",
          framing: "Trung rộng & Cận (Sigma 24–35mm • f/3.5)",
          move: "RS 4 Mini chế độ PF lia chậm (1080p 50fps slow-mo)",
          desc: "Montage kết cảnh: Học sinh hớn hở khoe trang sổ đầy chữ ký; Ban giám hiệu / thầy cô trao giấy chứng nhận hoặc danh hiệu Best English Speaker."
        }
      ],
      dialogue: [
        { speaker: "Student A (Điểm chính)", text: "\"Do you like English?\" → Teacher: \"Yes, I do. I love English!\"" },
        { speaker: "Student A", text: "\"What's your favourite food?\" → Teacher: \"My favourite food is chicken.\"" },
        { speaker: "Student A", text: "\"Thank you, teacher! Can you sign my English Passport, please?\" → Teacher: \"Of course! Well done!\"" },
        { speaker: "Student B (Phân hiệu)", text: "\"What's your favourite subject?\" → Teacher: \"My favourite subject is Music.\"" },
        { speaker: "Student B", text: "\"Why do you like it?\" → Teacher: \"Because music makes me happy!\"" },
        { speaker: "Student B", text: "\"Thank you! May I have your signature, please?\" → Teacher: \"Sure! Keep speaking English!\"" },
        { speaker: "Student A (Kết cảnh)", text: "\"Every conversation brings us a new signature!\"" },
        { speaker: "Student B (Kết cảnh)", text: "\"At the end of the activity, we count all the signatures and celebrate our best English speakers with special awards and titles!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Siêu cận cô giáo ký & đóng dấu vào sổ English Passport (50mm f/2.8)",
          motionVi: "Góc máy qua vai (RS 4 Mini giữ cò Lock) đẩy chậm cực mượt ở tiêu cự 50mm f/2.8 vào đôi tay cô giáo đang ký bút xanh lên cuốn sổ in chữ 'ENGLISH PASSPORT', hậu cảnh hành lang xóa mờ mềm mịn.",
          prompt: "Intimate over-the-shoulder close-up shot with silky slow DJI RS 4 Mini push-in inside a bright Vietnamese school hallway. A smiling Vietnamese female teacher bends down slightly to sign with a blue pen inside a colorful little booklet clearly titled 'ENGLISH PASSPORT' held open by a beaming 9-year-old Vietnamese boy in a white school shirt and red scarf. Razor-sharp focus on the pen signing the page with gorgeous f/2.8 hallway bokeh, soft corridor daylight plus subtle 30% 5500K fill light, Sony ZV-E10 Sigma 50mm f/2.8, 16:9."
        },
        {
          label: "Cú máy 2: Học sinh tự hào khoe sổ đầy chữ ký (50fps Slow-mo)",
          motionVi: "RS 4 Mini đẩy nhẹ ở 30mm f/3.5 (50fps slow-mo) vào nhóm 3 học sinh cười rạng rỡ giơ cao những cuốn English Passport mở ra đầy ắp chữ ký màu sắc.",
          prompt: "Joyful 50fps slow-motion medium shot with smooth gimbal push-in. Three proud Vietnamese primary school students in white uniforms and red scarves hold open their English Passport booklets filled with colorful teacher signatures and stamps toward the camera, beaming with excitement in a sunlit school hallway. Natural bright documentary colors, soft corridor depth, Sony ZV-E10 Sigma 30mm f/3.5, 16:9."
        }
      ]
    },
    {
      id: 7,
      code: "PC 07",
      title: "Explore Our English Corners",
      vnTitle: "Khám phá các Góc Tiếng Anh",
      duration: "35 giây",
      durationSec: 35,
      image: "./images/scene-07.jpg",
      location: "Trong nhà — Hành lang, góc lớp học, bảng trưng bày",
      environment: "indoor",
      isHighlight: false,
      needsSlowMo: true,
      needsLight: true,
      lightStatus: "Bật đèn nhẹ 35% (5500K, chiếu nghiêng tránh lóa mặt kính bảng)",
      zve10Config: "Sigma 20–50mm • Khẩu f/3.5 (lia bảng) & f/2.8 (bé thuyết trình cá heo) • 4K 25p & 1080p 50p",
      gimbalMode: "RS 4 Mini: Giữ cò Lock trượt ngang (Truck) song song bảng trưng bày",
      gimbalIcon: "truck",
      connectionType: "Match Cut trượt ngang 2 hành lang",
      connectionTip: "Cực dễ làm đẹp với RS 4 Mini: Vặn Sigma ở **24mm**, bóp giữ cò sau (Lock) và bước trượt ngang từ **TRÁI → PHẢI** dọc bảng English Corner ở Điểm chính; sang Phân hiệu cũng vặn **24mm** trượt đúng chiều **TRÁI → PHẢI** cùng tốc độ → ghép nối tạo cảm giác 1 hành lang trưng bày dài bất tận!",
      beginnerTip: "Nếu bảng trưng bày có bọc kính/mica rất dễ bị chói đèn: hãy chiếu đèn LED nhỏ **35%** lệch góc 45° từ bên hông (không rọi thẳng mặt bảng). Với bé thuyết trình bức tranh cá heo ('dolphin'), xoay Sigma lên **35mm f/2.8** để làm mờ hành lang phía sau, làm nổi bật bé và bức tranh!",
      shots: [
        {
          id: "s7-1",
          campus: "Điểm chính → Phân hiệu",
          framing: "Trung rộng (Sigma 24mm • f/3.5)",
          move: "RS 4 Mini giữ cò Lock trượt ngang từ trái sang phải (1080p 50fps)",
          desc: "Lia mượt qua các bảng English Corner rực rỡ tranh vẽ, sơ đồ tư duy (mind maps), mô hình học tập và học sinh đang chỉ trỏ xem bài."
        },
        {
          id: "s7-2",
          campus: "Cả 2 cơ sở",
          framing: "Cận sản phẩm (Sigma 45–50mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock — Push-in thật chậm",
          desc: "Cận 3–4 sản phẩm đẹp nhất (poster, bài viết tay tiếng Anh, tranh động vật) mỗi hình giữ 3 giây."
        },
        {
          id: "s7-3",
          campus: "Điểm chính hoặc Phân hiệu",
          framing: "Trung cận (Sigma 35mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock tĩnh hoặc đẩy rất nhẹ",
          desc: "Một học sinh tự tin cầm/chỉ vào poster vẽ con cá heo và giới thiệu bằng tiếng Anh: 'This is my project about animals. My favourite animal is a dolphin...'."
        }
      ],
      dialogue: [
        { speaker: "Student A", text: "\"Look at our English Corners!\"" },
        { speaker: "Student B", text: "\"Here, we can see many wonderful projects made by our students.\"" },
        { speaker: "Student A", text: "\"These are our pictures, posters and learning projects.\"" },
        { speaker: "Student B", text: "\"We use English to create, share and present our ideas.\"" },
        { speaker: "Học sinh thuyết trình", text: "\"This is my project about animals. My favourite animal is a dolphin. It is smart and friendly!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Trượt ngang hành lang English Corner (RS 4 Mini Lock Truck)",
          motionVi: "RS 4 Mini giữ cò Lock di chuyển trượt ngang đều từ trái qua phải ở tiêu cự 24mm f/3.5 song song bức tường hành lang trưng bày đầy tranh vẽ, poster và sơ đồ tư duy tiếng Anh.",
          prompt: "Silky smooth lateral DJI RS 4 Mini gimbal trucking shot moving left to right along a bright Vietnamese primary school corridor decorated as an 'ENGLISH CORNER' with colorful student posters, hand-drawn mind maps, and animal drawings on display boards. Smiling Vietnamese students in white shirts and red scarves admire and point at projects in natural motion. Clean corridor lighting enhanced by subtle 45-degree 5500K fill light, Sony ZV-E10 Sigma 24mm f/3.5, 16:9."
        },
        {
          label: "Cú máy 2: Học sinh tự tin thuyết trình tranh vẽ cá heo (35mm f/2.8)",
          motionVi: "RS 4 Mini đẩy chậm nhẹ ở tiêu cự 35mm f/2.8 xóa phông hành lang phía sau, bé gái cầm bức tranh vẽ cá heo màu xanh rực rỡ tươi cười trình bày tự tin vào ống kính.",
          prompt: "Steady medium close-up with gentle gimbal push-in of a confident 9-year-old Vietnamese girl wearing a white school shirt and red scarf standing beside an English Corner display board, proudly holding up her colorful hand-drawn poster of a blue dolphin and speaking happily to the camera. Soft hallway light with creamy f/2.8 background separation, Sony ZV-E10 Sigma 35mm f/2.8, 16:9."
        }
      ]
    },
    {
      id: 8,
      code: "PC 08",
      title: "English in Our Library",
      vnTitle: "Tiếng Anh trong Thư viện",
      duration: "35 giây",
      durationSec: 35,
      image: "./images/scene-08.jpg",
      location: "Trong nhà — Thư viện 2 điểm trường",
      environment: "indoor",
      isHighlight: false,
      needsSlowMo: true,
      needsLight: true,
      lightStatus: "Bật đèn 35–40% (5200K ấm dịu) — Mở trọn f/2.8 sáng mịn!",
      zve10Config: "Sigma 24–50mm • Khẩu f/2.8 (cận sách) & f/3.5 (cả nhóm đọc) • 4K 25p (1/50s) • Auto ISO max 3200",
      gimbalMode: "RS 4 Mini: Giữ cò Lock trượt qua mép kệ sách mở vào góc kể chuyện",
      gimbalIcon: "push-in",
      connectionType: "Match Cut mở sách giữa 2 thư viện",
      connectionTip: "Cú Match Cut siêu nghệ thuật: Dùng **Sigma 50mm f/2.8** quay cận bàn tay bé Điểm chính lật mở trang truyện tiếng Anh → cắt ngay vào bàn tay bé Phân hiệu đang mở trang sách tranh động vật!",
      beginnerTip: "Thư viện hay thiếu sáng, nhưng với **Sigma f/2.8** thì hình sẽ sáng mịn bất ngờ! Chỉ cần bật thêm đèn LED nhỏ **35–40%** (có tản sáng) đặt lệch 45° hướng vào cô và nhóm bé. Dùng tay cầm xách Briefcase Handle (hoặc ngồi bệt cùng thảm) để đặt RS 4 Mini ngang tầm ngồi của các bé — tạo cảm giác cực kỳ ấm cúng!",
      shots: [
        {
          id: "s8-1",
          campus: "Điểm chính",
          framing: "Trung cảnh (Sigma 24mm • f/3.2)",
          move: "RS 4 Mini giữ cò Lock lướt ngang qua mép kệ sách gỗ (reveal) mở vào góc cô đọc truyện",
          desc: "Học sinh bước vào thư viện rút một cuốn sách tiếng Anh từ kệ. Cắt sang cô giáo ngồi cùng nhóm 5–6 bé giơ cuốn truyện 'The Very Hungry Caterpillar'."
        },
        {
          id: "s8-2",
          campus: "Điểm chính",
          framing: "Cận sách & ánh mắt hào hứng (Sigma 45–50mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock — Push-in rất chậm",
          desc: "Quay cận bìa/trang minh họa sặc sỡ của cuốn sách, rồi cắt sang ánh mắt chăm chú và câu trả lời hào hứng của học sinh."
        },
        {
          id: "s8-3",
          campus: "Phân hiệu",
          framing: "Trung cận (Sigma 28mm • f/3.2)",
          move: "RS 4 Mini chế độ PF Half-Orbit chậm",
          desc: "Cô giáo Phân hiệu hỏi nhóm bé đang ngồi đọc sách quanh bàn; một học sinh giơ cuốn sách yêu thích về động vật mỉm cười giới thiệu."
        }
      ],
      dialogue: [
        { speaker: "Teacher (Điểm chính)", text: "\"Good morning, children! Today, we are going to read an English story.\"" },
        { speaker: "Students", text: "\"Wow! That's great!\"" },
        { speaker: "Teacher", text: "\"Look at this book. What's the title?\" → Student: \"It's The Very Hungry Caterpillar!\"" },
        { speaker: "Teacher", text: "\"Excellent! Who is the main character?\" → Student: \"It's a hungry caterpillar!\"" },
        { speaker: "Teacher (Phân hiệu)", text: "\"Do you like reading English books?\" → Students: \"Yes, we do!\"" },
        { speaker: "Student (Phân hiệu)", text: "\"My favourite book is about animals. I love reading English stories!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Lướt qua kệ sách mở vào góc kể chuyện (Reveal Push-in)",
          motionVi: "RS 4 Mini di chuyển chậm ở 24mm f/2.8 lướt ngang qua mép kệ sách mờ tiền cảnh (foreground reveal) tiến vào góc đọc ấm áp nơi cô giáo đang giơ cuốn truyện tranh tiếng Anh kể cho các bé.",
          prompt: "Warm cinematic DJI RS 4 Mini gimbal push-in revealing from behind a softly blurred colorful wooden bookshelf foreground into a cozy, bright Vietnamese primary school library. A gentle Vietnamese female teacher sits at child height with five smiling 9-year-old students in white uniforms and red scarves, holding open an illustrated English children's storybook about a green caterpillar as kids lean in wide-eyed. Soft window daylight balanced with gentle 35% warm 5200K fill light, rich f/2.8 depth, Sony ZV-E10 Sigma 24mm f/2.8, 16:9."
        }
      ]
    },
    {
      id: 9,
      code: "PC 09",
      title: "English Is Everywhere",
      vnTitle: "Tiếng Anh hiện diện khắp nơi",
      duration: "25 giây",
      durationSec: 25,
      image: "./images/scene-09.jpg",
      location: "Trong nhà — Cầu thang & Tường khẩu hiệu 2 điểm trường",
      environment: "indoor",
      isHighlight: false,
      needsSlowMo: true,
      needsLight: true,
      lightStatus: "Bật đèn 35% (cầu thang hay bị bóng tối)",
      zve10Config: "Sigma 18mm rộng nhất! • Khẩu f/3.5 (để chữ cầu thang & bé cùng nét) • 1080p 50fps (1/100s) • SteadyShot OFF",
      gimbalMode: "RS 4 Mini: Gạt PTF (ngước lên bậc thang) & PF đi song song",
      gimbalIcon: "tilt-reveal",
      connectionType: "Match Cut bước chân cầu thang 2 cơ sở",
      connectionTip: "Cảnh này ngắn (25 giây) nhưng nhịp rất vui! Vặn Sigma về **18mm**, quay cận đôi giày bước lên bậc thang có dán khẩu hiệu tiếng Anh ở Điểm chính → cắt khớp đúng bước chân đi lên ở Phân hiệu! Lời thoại các bạn học sinh đọc dạng Voice-over đè lên hình sẽ cực mượt.",
      beginnerTip: "Đi trên cầu thang rất dễ bị nhấp nhô lên xuống: Chuyển ZV-E10 sang **1080p 50fps** + **Sigma 18mm** (góc rộng giảm cảm giác rung cực tốt!), về dựng làm chậm nhẹ 80% là mượt như trượt ray! Để an toàn, quay từ **chiếu nghỉ trên cao nhìn xuống** hoặc đi song song lan can, KHÔNG tự đi giật lùi trên bậc thang mà không có người đỡ!",
      shots: [
        {
          id: "s9-1",
          campus: "Điểm chính",
          framing: "Cận góc thấp (Sigma 18mm • f/3.5)",
          move: "RS 4 Mini gạt PTF (hoặc đẩy nhẹ Joystick lên) theo bước chân (1080p 50fps)",
          desc: "Hạ RS 4 Mini gần bậc thang (dùng chế độ Briefcase cực tiện!), lấy rõ các dải chữ tiếng Anh dán trên bậc khi chân các bé bước lên, rồi hất dần lên các bé đang vui vẻ trò chuyện."
        },
        {
          id: "s9-2",
          campus: "Phân hiệu",
          framing: "Góc từ trên chiếu nghỉ nhìn xuống (Sigma 18mm • f/4)",
          move: "RS 4 Mini chế độ PF pan nhẹ theo nhóm học sinh đi lên cầu thang",
          desc: "Quay góc cao xuống cầu thang Phân hiệu, lia qua các bảng khẩu hiệu tiếng Anh dán dọc tường hành lang."
        },
        {
          id: "s9-3",
          campus: "Cả 2 cơ sở",
          framing: "Trung cảnh (Sigma 24mm • f/3.5)",
          move: "RS 4 Mini chế độ PF đi song song",
          desc: "Nhóm 3 học sinh vừa đi vừa cười nói tự nhiên: 'Let's go!', 'See you in class!', 'Have a nice day!'."
        }
      ],
      dialogue: [
        { speaker: "Student A (Voice-over)", text: "\"English is everywhere in our school!\"" },
        { speaker: "Student B (Voice-over)", text: "\"We see English words on the walls, on the stairs and in our classrooms.\"" },
        { speaker: "Student A (Voice-over)", text: "\"And we use English every day!\"" },
        { speaker: "Nhóm học sinh trên cầu thang", text: "\"Let's go!\" — \"See you in class!\" — \"Have a nice day!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Lia góc thấp từ bậc thang khẩu hiệu lên học sinh (18mm 50fps)",
          motionVi: "RS 4 Mini hạ thấp sát bậc cầu thang sáng sủa có dán khẩu hiệu tiếng Anh đầy màu sắc ở góc rộng 18mm, đi lên mượt mà và hất nhẹ lên nhóm học sinh vừa đi vừa cười nói.",
          prompt: "Dynamic smooth DJI RS 4 Mini gimbal tracking shot starting low along bright Vietnamese primary school staircase steps decorated with colorful English motivational riser decals ('Be Kind', 'Smile!', 'Have a Nice Day!'), tilting up gracefully as cheerful 9-year-old Vietnamese students in white uniforms and red scarves walk up the stairs chatting happily. Natural daylight streaming from large stairwell windows plus subtle soft fill light, smooth 50fps cinematic motion, Sony ZV-E10 Sigma 18mm f/3.5, 16:9."
        }
      ]
    },
    {
      id: 10,
      code: "PC 10",
      title: "Let's Talk to Our Teachers!",
      vnTitle: "Trò chuyện cùng thầy cô trong vườn trường",
      duration: "40 giây",
      durationSec: 40,
      image: "./images/scene-10.jpg",
      location: "Ngoài trời — Vườn trường & Trạm thu pin cũ",
      environment: "outdoor",
      isHighlight: false,
      needsSlowMo: true,
      needsLight: false,
      lightStatus: "Tắt đèn (Chọn góc bóng râm mát trong vườn trường)",
      zve10Config: "Sigma 28–50mm • Khẩu f/4 (bóng râm vườn) / f/5.6 (ngoài nắng) • 4K 25p & 1080p 50p • Gắn mút lọc gió",
      gimbalMode: "RS 4 Mini: PF Half-Orbit quanh cô & trò + Giữ cò Lock cận trạm thu pin",
      gimbalIcon: "orbit",
      connectionType: "Cắt song song: Vườn hoa (Điểm chính) → Trạm thu pin (Phân hiệu)",
      connectionTip: "Cảnh ngoài trời xanh mát giúp thay đổi không khí sau chuỗi cảnh trong lớp! Dùng **Sigma 50mm f/2.8–f/4** quay thêm 1 cú cận tay học sinh cẩn thận bỏ viên pin cũ vào hộp thu pin (Battery Collection Box) — hình ảnh giáo dục môi trường cực kỳ đắt giá!",
      beginnerTip: "Cho cô và bé đứng trong **vùng bóng râm đều cạnh bồn hoa hồng hoặc trạm thu pin** (không để nắng chiếu loang lổ trên mặt!): vừa dễ chịu cho mắt các bé, vừa cho phép bạn mở Sigma ở **f/3.5 – f/4** để phông nền vườn cây phía sau xanh mướt mờ ảo tuyệt đẹp mà không bị cháy sáng!",
      shots: [
        {
          id: "s10-1",
          campus: "Điểm chính (Vườn hoa)",
          framing: "Trung 2 nhân vật (Sigma 28mm • f/4)",
          move: "RS 4 Mini chế độ PF Half-Orbit rất chậm quanh cô và Student A bên khóm hoa hồng",
          desc: "Student A đi tới hỏi cô giáo về loài hoa yêu thích ('roses') và lý do yêu vườn trường xanh mát."
        },
        {
          id: "s10-2",
          campus: "Điểm chính",
          framing: "Cận hoa hồng xóa phông (Sigma 50mm • f/3.2)",
          move: "RS 4 Mini giữ cò Lock — Push-in chậm (1080p 50fps)",
          desc: "Quay cận bông hoa hồng rực rỡ dưới nắng nhẹ và góc vườn trường xanh mướt làm hình chen (cutaway)."
        },
        {
          id: "s10-3",
          campus: "Phân hiệu (Trạm thu pin)",
          framing: "Trung 2 người (28mm f/4) → Cận trạm pin (50mm f/3.5)",
          move: "RS 4 Mini giữ cò Lock tĩnh + Push-in vào hộp thu pin",
          desc: "Student B chỉ vào trạm thu gom pin cũ hỏi cô giáo, nghe cô giải thích về bảo vệ môi trường; quay cận bảng chữ thông điệp và hành động bỏ pin cũ vào hộp."
        }
      ],
      dialogue: [
        { speaker: "Student A (Vườn trường - Điểm chính)", text: "\"Good morning, teacher!\" → Teacher: \"Good morning! How can I help you?\"" },
        { speaker: "Student A", text: "\"What is your favourite flower?\" → Teacher: \"I love roses. They are beautiful!\"" },
        { speaker: "Student A", text: "\"Why do you like our school garden?\" → Teacher: \"Because it is green and fresh!\"" },
        { speaker: "Student B (Trạm thu pin - Phân hiệu)", text: "\"Excuse me, teacher. What is this?\" → Teacher: \"This is a battery collection box.\"" },
        { speaker: "Student B", text: "\"Why do we collect old batteries?\" → Teacher: \"Because old batteries can harm the environment. We should recycle them safely.\"" },
        { speaker: "Student B", text: "\"That's great! Let's protect our environment!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Trò chuyện giữa vườn hoa & trạm thu pin (RS 4 Mini Orbit)",
          motionVi: "RS 4 Mini chế độ PF đi vòng cung chậm và êm ở 28mm f/4 quanh cô giáo cùng học sinh đang vui vẻ trò chuyện bên vườn hoa hồng xanh mát và hộp thu gom pin thân thiện môi trường.",
          prompt: "Gentle half-orbit DJI RS 4 Mini gimbal medium two-shot in a lush green Vietnamese primary school garden with blooming roses and a neat labeled green 'BATTERY COLLECTION BOX' nearby. A curious 9-year-old Vietnamese student in a white shirt and red scarf chats happily in English with a smiling Vietnamese teacher who gestures warmly toward the garden flowers and recycling box. Soft open shade on faces with vibrant sunny green bokeh background, Sony ZV-E10 Sigma 28mm f/4, 16:9."
        },
        {
          label: "Cú máy 2: Cận cảnh bỏ pin cũ vào hộp thu pin (Sigma 50mm)",
          motionVi: "Cú quay cận 50mm đẩy nhẹ chậm rãi (50fps) vào bàn tay nhỏ của học sinh thả viên pin cũ vào hộp thu gom pin tái chế có dán thông điệp bảo vệ môi trường.",
          prompt: "Crisp 50fps slow-motion close-up gimbal push-in of a young Vietnamese student's hand carefully dropping an old AA battery into a clean green eco-friendly 'Battery Collection Box' with environmental message stickers in a sunlit school garden. Creamy shallow depth of field, vibrant natural daylight, Sony ZV-E10 Sigma 50mm f/3.5, 16:9."
        }
      ]
    },
    {
      id: 11,
      code: "PC 11",
      title: "Learning Natural and Social Sciences in English",
      vnTitle: "Học Tự nhiên & Xã hội bằng Tiếng Anh",
      duration: "55 giây",
      durationSec: 55,
      image: "./images/scene-11.jpg",
      location: "Trong nhà — Lớp học (Tiết học tích hợp)",
      environment: "indoor",
      isHighlight: true,
      needsSlowMo: false,
      needsLight: true,
      lightStatus: "Bật đèn nhẹ 35% (5500K, góc 45°) — Khẩu f/2.8–f/3.5 sáng rõ!",
      zve10Config: "Sigma 24–45mm • Khẩu f/3.5 (nhóm vẽ) & f/2.8 (cô cầm cây / 1 bé trả lời) • 4K 25p (1/50s) • Đặt điện thoại ghi âm trên bàn!",
      gimbalMode: "RS 4 Mini: PF lia mềm cô cầm cây → giữ cò Lock bé trả lời → góc 45° bàn nhóm",
      gimbalIcon: "push-in",
      connectionType: "Đan xen tiết học thật 2 cơ sở + Voice-over kết",
      connectionTip: "⭐ ĐIỂM NHẤN QUAN TRỌNG (55 giây): Minh chứng thuyết phục nhất cho Tiếng Anh là ngôn ngữ thứ hai! Phải giữ TIẾNG THẬT của cô giảng và các bé trả lời ('roots, stem, leaves, flowers'). Quay 1 tiết tại Điểm chính và cảnh làm việc nhóm vẽ cây tại Phân hiệu!",
      beginnerTip: "Chuẩn bị **1 chậu cây thật có đủ rễ, thân, lá, hoa** + giấy A3 và bút dạ màu đậm! Lúc quay nhóm 4 bé chụm đầu vẽ và dán nhãn 'stem / leaves', nhớ khép Sigma về **24mm f/4** (không mở f/2.8 để cả 4 bé và chữ vẽ trên tờ giấy A3 đều nét căng!), nghiêng nhẹ RS 4 Mini góc 45° từ trên nhìn xuống bàn học.",
      shots: [
        {
          id: "s11-1",
          campus: "Điểm chính",
          framing: "Trung cảnh (Sigma 28mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock — Push-in nhẹ khi cô giơ chậu cây thật",
          desc: "Cô giáo cầm cây thật (hoặc mô hình lớn) giảng bài 'Parts of a Plant', chỉ vào từng bộ phận và đặt câu hỏi cho cả lớp."
        },
        {
          id: "s11-2",
          campus: "Điểm chính & Phân hiệu",
          framing: "Trung cận học sinh (Sigma 35–45mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock tĩnh (đổi góc nhanh giữa 3 bé trả lời)",
          desc: "Quay lần lượt 3 học sinh đứng lên trả lời dõng dạc chức năng của roots, stem, leaves, flowers. (Nhớ đặt điện thoại ghi âm gần bàn các bé trả lời!)."
        },
        {
          id: "s11-3",
          campus: "Phân hiệu",
          framing: "Cận bàn nhóm góc 45° trên xuống (Sigma 24mm • f/4)",
          move: "RS 4 Mini chế độ PF Half-Orbit chậm quanh bàn làm việc nhóm",
          desc: "Nhóm 4 học sinh chụm đầu vẽ cây lên tờ giấy A3, chỉ tay nói chuyện bằng tiếng Anh: 'This is the stem' – 'These are the leaves' – 'Great! Let's finish our picture!'."
        }
      ],
      dialogue: [
        { speaker: "Teacher", text: "\"Good morning, class! Today, we are going to learn about plants. Look at this plant. Can you name its parts?\"" },
        { speaker: "Student 1", text: "\"Yes! A plant has roots, a stem, leaves and flowers.\"" },
        { speaker: "Teacher", text: "\"Very good! What do roots do?\" → Student 2: \"Roots take in water from the soil.\"" },
        { speaker: "Teacher", text: "\"Excellent! What do leaves need to make food?\" → Student 3: \"They need sunlight, air and water.\"" },
        { speaker: "Teacher", text: "\"Wonderful! Now, let's work in groups. Please draw a plant and label its parts in English.\"" },
        { speaker: "Nhóm học sinh (Student 4 & 5)", text: "\"This is the stem.\" — \"These are the leaves.\" — \"Great! Let's finish our picture!\"" },
        { speaker: "Student A & B (Lời dẫn kết cảnh)", text: "\"We learn about the world around us through English.\" — \"English helps us explore, understand and share knowledge in many subjects!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Cô giáo cầm cây thật giảng bài Khoa học (Sigma 28mm f/2.8)",
          motionVi: "RS 4 Mini đẩy chậm vào cô giáo ở tiêu cự 28mm f/2.8 đang giơ chậu cây có hoa tươi minh họa các bộ phận của cây trước bảng lớp, học sinh giơ tay hào hứng ở tiền cảnh mờ đẹp.",
          prompt: "Natural documentary DJI RS 4 Mini gimbal slow push-in inside a bright Vietnamese primary school classroom. A smiling Vietnamese female teacher holds up a real potted flowering plant near the front desk explaining plant parts in English, while enthusiastic 9-year-old Vietnamese students in white shirts and red scarves raise their hands eagerly in soft f/2.8 foreground bokeh. Bright window daylight plus subtle 35% 5500K fill light, crisp focus on teacher and plant, Sony ZV-E10 Sigma 28mm f/2.8, 16:9."
        },
        {
          label: "Cú máy 2: Nhóm học sinh thảo luận vẽ 'Parts of a Plant' (24mm f/4)",
          motionVi: "RS 4 Mini đặt hơi cao nghiêng 45 độ nhìn xuống mặt bàn học, di chuyển vòng cung chậm quanh 4 học sinh đang vẽ cây bằng bút màu và chỉ tay ghi chú từ tiếng Anh 'Roots, Stem, Leaves'.",
          prompt: "Angled 45-degree overhead gimbal orbit around a classroom table where four focused, happy Vietnamese primary school students in white uniforms and red scarves collaborate on a large white A3 poster drawing a green plant and labeling 'Roots', 'Stem', 'Leaves', and 'Flower' with colorful markers. Bright natural classroom lighting with soft fill, crisp clarity across both faces and drawing at f/4, Sony ZV-E10 Sigma 24mm f/4, 16:9."
        }
      ]
    },
    {
      id: 12,
      code: "PC 12",
      title: "English During Break Time",
      vnTitle: "Tiếng Anh trong giờ ra chơi",
      duration: "35 giây",
      durationSec: 35,
      image: "./images/scene-12.jpg",
      location: "Ngoài trời — Sân trường, hành lang, khu vui chơi",
      environment: "outdoor",
      isHighlight: false,
      needsSlowMo: true,
      needsLight: false,
      lightStatus: "Tắt đèn (Nắng chiều dịu dưới tán cây sân trường)",
      zve10Config: "Sigma 18–35mm • Khẩu f/4 (bóng cây) / f/5.6 (nắng) • 4K 25p (thoại) & 1080p 50p (đánh cầu lông)",
      gimbalMode: "RS 4 Mini: Chế độ PF di chuyển linh hoạt bắt khoảnh khắc tự nhiên",
      gimbalIcon: "pull-out",
      connectionType: "Montage tự nhiên đan xen 2 sân trường",
      connectionTip: "Kịch bản nhấn mạnh: 'không cần diễn quá cứng nhắc'. Hãy để các bé chơi cầu lông / trốn tìm THẬT trong 2–3 phút, bật **1080p 50fps + Sigma 24mm f/4** đi theo bắt trọn nụ cười tự nhiên, rồi mới quay riêng 3 đoạn đối thoại ngắn gọn!",
      beginnerTip: "Ngoài sân giờ ra chơi ồn! Để quay 3 câu hội thoại ngắn ('What are you doing?', 'Hide-and-seek', 'Badminton'), hãy dùng **Sigma 24mm** đứng gần 2 bé (~1m) ở góc sân dưới gốc cây tách đám đông một chút, gắn mút lông lọc gió cho ZV-E10!",
      shots: [
        {
          id: "s12-1",
          campus: "Điểm chính",
          framing: "Trung cảnh (Sigma 24mm • f/4 bóng cây)",
          move: "RS 4 Mini chế độ PF đi nhẹ theo bé 1 chạy tới rủ nhóm bạn chơi",
          desc: "Student 1 chạy lại bàn/ghế đá hỏi Student 2 đang chơi trò chơi: 'Hi, what are you doing?' → 'I'm playing a game. Do you want to join us?'."
        },
        {
          id: "s12-2",
          campus: "Điểm chính",
          framing: "Trung cận (Sigma 35mm • f/4)",
          move: "RS 4 Mini chế độ PF Half-Orbit nhanh nhẹ (1080p 50fps)",
          desc: "Nhóm bạn thứ hai cười vui chơi trốn tìm/chia sẻ đồ chơi, nói tự nhiên 'I like hide-and-seek! Let's play together!'."
        },
        {
          id: "s12-3",
          campus: "Phân hiệu",
          framing: "Trung rộng năng động (Sigma 18–24mm • f/5.6)",
          move: "RS 4 Mini chế độ PF lia theo quả cầu lông bay qua lại (1080p 50fps slow-mo)",
          desc: "Hai học sinh Phân hiệu cầm vợt rủ nhau 'Would you like to play badminton? – Yes! Let's go!', sau đó quay cú đánh cầu cười vang dưới tán cây."
        }
      ],
      dialogue: [
        { speaker: "Nhóm 1 (Điểm chính)", text: "S1: \"Hi, what are you doing?\" — S2: \"I'm playing a game. Do you want to join us?\" — S1: \"Sure! That sounds fun!\"" },
        { speaker: "Nhóm 2 (Điểm chính)", text: "\"What's your favourite game?\" — \"I like hide-and-seek!\" — \"Let's play together!\"" },
        { speaker: "Nhóm 3 (Phân hiệu)", text: "S3: \"Would you like to play badminton?\" — S4: \"Yes! Let's go!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy chính: Chơi cầu lông & cười đùa dưới tán cây sân trường (50fps)",
          motionVi: "RS 4 Mini chế độ PF di chuyển linh hoạt ở góc thấp nhẹ tiêu cự 24mm f/4 theo hai học sinh đang đánh cầu lông vui vẻ dưới bóng râm sân trường, nắng chiều xiên ấm áp xuyên qua tán lá.",
          prompt: "Candid energetic DJI RS 4 Mini gimbal pan-follow shot in a sunny Vietnamese primary school courtyard during recess break time. Joyful 9-year-old Vietnamese students in white shirts and red scarves laugh and play badminton with rackets and shuttlecock under shady green courtyard trees, other friends chatting playfully in soft background focus. Warm afternoon golden sunlight, smooth 50fps slow-motion documentary look, Sony ZV-E10 Sigma 24mm f/4, 16:9."
        }
      ]
    },
    {
      id: 13,
      code: "PC 13",
      title: "Happy Lunch Time",
      vnTitle: "Giờ ăn trưa vui vẻ",
      duration: "35 giây",
      durationSec: 35,
      image: "./images/scene-13.jpg",
      location: "Trong nhà — Phòng ăn / Lớp học bán trú",
      environment: "indoor",
      isHighlight: false,
      needsSlowMo: true,
      needsLight: true,
      lightStatus: "Bật đèn 35% (5000K ấm nhẹ giúp đồ ăn trông cực ngon!)",
      zve10Config: "Sigma 24–50mm • Khẩu f/2.8 (trượt cận khay cơm!) & f/3.5 (cô trò hỏi đáp) • 4K 25p (1/50s) & 1080p 50p",
      gimbalMode: "RS 4 Mini: Giữ cò Lock trượt chậm qua hàng khay cơm + PF quay cô & bé",
      gimbalIcon: "truck",
      connectionType: "Cắt song song bữa trưa 2 cơ sở",
      connectionTip: "ĐỂ ĐỒ ĂN TRÔNG NGON NHƯ VIDEO ẨM THỰC: Vặn Sigma lên **40–50mm f/2.8**, bật **1080p 50fps**, quay cú cận trượt ngang hàng khay cơm inox (cơm trắng, gà vàng, rau xanh, canh) TRƯỚC khi các bé bắt đầu ăn — lúc món ăn còn nóng hổi, ngăn nắp nhất!",
      beginnerTip: "Đèn tuýp phòng ăn hay làm da mặt và thịt gà bị hơi xanh. Bạn bật đèn LED nhỏ **35% (hơi ấm 5000K)** chiếu nghiêng 45° + khẩu **f/2.8** của Sigma sẽ khiến khay đồ ăn tươi ngon bắt mắt và gương mặt các bé hồng hào tự nhiên!",
      shots: [
        {
          id: "s13-1",
          campus: "Điểm chính",
          framing: "Cận ẩm thực góc 45° (Sigma 40–50mm • f/2.8)",
          move: "RS 4 Mini giữ cò Lock trượt ngang chậm qua dãy khay cơm sạch sẽ (1080p 50fps)",
          desc: "Quay cận cảnh khay cơm bán trú đầy đủ cơm, gà, rau xanh, canh gọn gàng sạch sẽ trước giờ ăn."
        },
        {
          id: "s13-2",
          campus: "Điểm chính",
          framing: "Trung cảnh (Sigma 24mm • f/3.5)",
          move: "RS 4 Mini chế độ PF lia nhẹ từ cô giáo sang các bé ngồi ngay ngắn ở bàn",
          desc: "Cô giáo vui vẻ hỏi 'Are you hungry, children?' – 'What do we have for lunch today?', bé chỉ vào khay cơm kể tên các món bằng tiếng Anh."
        },
        {
          id: "s13-3",
          campus: "Phân hiệu",
          framing: "Trung cận (Sigma 28mm • f/3.5)",
          move: "RS 4 Mini giữ cò Lock — Push-in nhẹ",
          desc: "Cô giáo Phân hiệu hỏi món yêu thích; học sinh hào hứng trả lời rồi cả lớp đồng thanh 'Thank you, teacher! Let's eat!' và vui vẻ ăn trưa."
        }
      ],
      dialogue: [
        { speaker: "Teacher (Điểm chính)", text: "\"Are you hungry, children?\" → Students: \"Yes, we are!\"" },
        { speaker: "Teacher", text: "\"What do we have for lunch today?\" → Student 1: \"We have rice, chicken, vegetables and soup!\"" },
        { speaker: "Teacher", text: "\"Do you like your lunch?\" → Students: \"Yes! It's delicious!\"" },
        { speaker: "Teacher (Phân hiệu)", text: "\"What's your favourite food?\" → Student 2: \"I love chicken and vegetables!\"" },
        { speaker: "Teacher (Phân hiệu)", text: "\"That's great! Remember to eat well and stay healthy!\" → Students: \"Thank you, teacher! Let's eat!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Trượt ngang khay cơm dinh dưỡng & nụ cười giờ ăn (Sigma 35mm f/2.8)",
          motionVi: "RS 4 Mini giữ cò Lock trượt chậm ở góc 45 độ tiêu cự 35mm f/2.8 qua những khay cơm inox sạch sẽ đầy màu sắc rồi ngước nhẹ lên nụ cười tươi của các bé và cô giáo.",
          prompt: "Appetizing 50fps slow DJI RS 4 Mini gimbal trucking shot gliding across neat stainless-steel compartmentalized Vietnamese school lunch trays filled with steamed white rice, golden chicken, vibrant green vegetables, and soup, gently tilting up to smiling 9-year-old Vietnamese primary students sitting tidily at tables chatting with a kind female teacher. Clean bright indoor lighting enhanced with warm 5000K soft LED fill light, creamy f/2.8 depth, appetizing realistic colors, Sony ZV-E10 Sigma 35mm f/2.8, 16:9."
        }
      ]
    },
    {
      id: 14,
      code: "PC 14",
      title: "Music Makes Us Happy",
      vnTitle: "Âm nhạc làm chúng em vui",
      duration: "45 giây",
      durationSec: 45,
      image: "./images/scene-14.jpg",
      location: "Trong nhà — Phòng Âm nhạc / Lớp học 2 điểm trường",
      environment: "indoor",
      isHighlight: true,
      needsSlowMo: true,
      needsLight: true,
      lightStatus: "Bật đèn nhẹ 35% (5500K, góc 45°)",
      zve10Config: "Sigma 18–50mm • Khẩu f/3.5 (cả lớp hát) & f/2.8 (cận trống, tambourine, ca sĩ nhí) • 4K 25p (1/50s) & 1080p 50p",
      gimbalMode: "RS 4 Mini: PF năng động + Giữ cò Lock cận nhạc cụ + Half-Orbit ca sĩ nhí",
      gimbalIcon: "orbit",
      connectionType: "Cắt theo nhịp phách giữa 2 phòng nhạc",
      connectionTip: "⭐ ĐIỂM NHẤN TÍCH HỢP: Cảnh này có tiếng nhạc cụ thật (trống, tambourine, thanh phách) rất đã tai! Dùng **Sigma 50mm f/2.8** quay cận bàn tay cô lắc tambourine & gõ trống, cắt theo đúng nhịp vỗ tay 'bốp – bốp' nối giữa Điểm chính và Phân hiệu!",
      beginnerTip: "Đa dạng 3 cỡ cảnh trong phòng nhạc chỉ bằng 1 ống Sigma: **18mm f/3.5** góc chéo lấy toàn lớp vỗ tay → **35mm f/2.8** quay cận 3–4 bé hát biểu cảm nhiệt tình nhất → **50mm f/2.8** cận chiếc trống/tambourine! Nhớ chọn tiêu cự xong rồi mới bấm REC nút đỏ trên RS 4 Mini.",
      shots: [
        {
          id: "s14-1",
          campus: "Điểm chính",
          framing: "Trung cô giáo (24mm f/3.2) → Cận nhạc cụ (50mm f/2.8)",
          move: "RS 4 Mini giữ cò Lock — Push-in vào chiếc trống nhỏ & lục lạc tambourine",
          desc: "Cô giáo giới thiệu chủ đề 'Feel the Rhythm', lần lượt giơ trống (drum) và lục lạc (tambourine) để học sinh đoán tên bằng tiếng Anh."
        },
        {
          id: "s14-2",
          campus: "Điểm chính",
          framing: "Trung rộng (18mm f/3.5) & Cận bàn tay vỗ (45mm f/2.8)",
          move: "RS 4 Mini chế độ PF lia mượt theo hàng học sinh vỗ tay theo nhịp (50fps cho cú cận)",
          desc: "Cô tạo nhịp, cả lớp đồng loạt vỗ tay, lắc người và hát theo bài hát tiếng Anh vui nhộn."
        },
        {
          id: "s14-3",
          campus: "Phân hiệu",
          framing: "Trung nhóm biểu diễn (Sigma 28mm • f/3.2)",
          move: "RS 4 Mini chế độ PF Half-Orbit nhẹ quanh 'little music star'",
          desc: "Cô giáo Phân hiệu hỏi 'Who wants to be our little music star today?', một bé hăng hái giơ tay lên biểu diễn cùng cả lớp vỗ tay cổ vũ rộn ràng."
        }
      ],
      dialogue: [
        { speaker: "Teacher (Điểm chính)", text: "\"Good morning, everyone! Are you ready for Music class?\" → Students: \"Yes, we are!\"" },
        { speaker: "Teacher", text: "\"Today, we are going to learn about rhythm and musical instruments. Look! What's this?\"" },
        { speaker: "Students", text: "S1: \"It's a drum!\" — S2: \"It's a tambourine!\"" },
        { speaker: "Teacher", text: "\"Wonderful! Now, listen to the rhythm. Clap your hands with me! Can you sing and move to the music?\" → Students: \"Yes! We can!\"" },
        { speaker: "Teacher (Phân hiệu)", text: "\"Let's sing together! Follow the music and don't forget to smile!\" → Students: \"Music makes us happy!\"" },
        { speaker: "Teacher (Phân hiệu)", text: "\"Who wants to be our little music star today?\" → Student: \"Me! I love singing!\"" },
        { speaker: "Gợi ý bài hát", text: "If You're Happy and You Know It / Hello Song / The More We Get Together", isCaption: true }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Cô giơ tambourine dẫn nhịp & cả lớp vỗ tay hát vui tươi",
          motionVi: "RS 4 Mini chế độ PF ở tiêu cự 24mm f/3.2 lia chuyển mượt từ cô giáo đang cười tươi lắc lục lạc gỗ (tambourine) sang các hàng học sinh vỗ tay đều tăm tắp và nhún nhảy theo nhịp nhạc.",
          prompt: "Joyful dynamic DJI RS 4 Mini gimbal pan-follow medium shot inside a colorful Vietnamese primary school music classroom decorated with musical notes. An enthusiastic Vietnamese female music teacher shakes a wooden tambourine and taps a small hand drum, leading excited 9-year-old Vietnamese students in white uniforms and red scarves who clap rhythmically and sing with huge smiles. Bright lively daylight plus subtle 35% 5500K fill light, crisp f/3.2 clarity, Sony ZV-E10 Sigma 24mm, 16:9."
        }
      ]
    },
    {
      id: 15,
      code: "PC 15",
      title: "Sports Time – Let's Play Basketball!",
      vnTitle: "Giờ Thể thao – Cùng chơi bóng rổ!",
      duration: "45 giây",
      durationSec: 45,
      image: "./images/scene-15.jpg",
      location: "Ngoài trời — Sân bóng rổ / Sân thể dục",
      environment: "outdoor",
      isHighlight: false,
      needsSlowMo: true,
      needsLight: false,
      lightStatus: "Tắt đèn (Quay nắng chiều 15h30–16h30 cực đẹp!)",
      zve10Config: "Sigma 18–24mm góc rộng! • Khẩu f/5.6–f/8 (ngoài nắng + chống out nét khi chạy nhanh!) • 1080p 50/60fps",
      gimbalMode: "RS 4 Mini: Gạt PTF góc THẤP sát sân (Briefcase Handle) chạy theo bóng & hất lên rổ!",
      gimbalIcon: "tilt-reveal",
      connectionType: "Match Cut chuyền bóng giữa 2 sân trường",
      connectionTip: "Cú Match Cut thể thao cực ngầu: Bé ở Điểm chính tung đường chuyền quả bóng rổ bay sang cạnh PHẢI khung hình → cắt sang bé ở Phân hiệu bắt gọn quả bóng từ cạnh TRÁI khung hình rồi ném vào rổ!",
      beginnerTip: "Bí kíp quay bóng rổ không bị out nét trên Sigma 18-50mm: **ĐỂ CỐ ĐỊNH 18mm + KHÉP KHẨU f/5.6–f/8 + 1080p 50fps**! Vừa không bị cháy nắng chiều, vừa có vùng nét sâu nên các bé chạy nhanh cỡ nào cũng nét căng! Lật RS 4 Mini chế độ xách tay thấp gần đầu gối (Briefcase) hất lên trời xanh — nhìn các bé ném rổ oai như phim thể thao Nike! (Đứng sát biên sân tránh bóng đập vào lens nhé!).",
      shots: [
        {
          id: "s15-1",
          campus: "Điểm chính",
          framing: "Trung rộng (Sigma 18–20mm • f/6.3)",
          move: "RS 4 Mini chế độ PF lia theo thầy thể dục & đội hình khởi động",
          desc: "Thầy giáo thể dục hô khẩu lệnh 'Let's warm up first! Run, jump and stretch!', đội bóng rổ đồng thanh đếm 'One, two, three, four!' đầy khí thế."
        },
        {
          id: "s15-2",
          campus: "Cả 2 cơ sở (Match Cut chuyền bóng)",
          framing: "Góc thấp năng động (Sigma 18mm • f/6.3)",
          move: "RS 4 Mini gạt PTF chạy nhẹ theo biên sân + hất máy theo bóng vào rổ (1080p 50fps)",
          desc: "Các bé chuyền bóng 'Pass the ball, please!' – 'Here you are!', nhồi bóng và bật nhảy ném vào rổ trong tiếng hò reo 'Come on! You can do it!'."
        },
        {
          id: "s15-3",
          campus: "Cả 2 cơ sở",
          framing: "Trung rộng góc thấp (Sigma 18mm • f/5.6)",
          move: "RS 4 Mini giữ cò Lock — Push-in mạnh mẽ vào cả đội chụm tay",
          desc: "Cả đội chụm tay giữa sân tung lên trời hô vang: 'We are strong! We are healthy! We are a team!'."
        }
      ],
      dialogue: [
        { speaker: "PE Teacher", text: "\"Good morning, team! Are you ready to play basketball?\" → Students: \"Yes, coach!\"" },
        { speaker: "PE Teacher", text: "\"Let's warm up first! Run, jump and stretch!\" → Students: \"One, two, three, four!\"" },
        { speaker: "Trong lúc tập luyện", text: "S1: \"Pass the ball, please!\" — S2: \"Here you are!\" — S1: \"Thank you! I'm going to shoot!\" — S3: \"Come on! You can do it!\"" },
        { speaker: "PE Teacher", text: "\"Great teamwork! Keep trying and never give up!\"" },
        { speaker: "Cả đội (Kết cảnh)", text: "\"We are strong! We are healthy! We are a team!\"" }
      ],
      aiPrompts: [
        {
          label: "Cú máy 1: Góc thấp chạy theo pha chuyền & ném bóng rổ (18mm 50fps)",
          motionVi: "RS 4 Mini gạt PTF hạ cực thấp gần mặt sân ở tiêu cự 18mm, chạy nhanh dọc biên theo học sinh dẫn bóng rồi hất máy mượt lên cao theo đường bóng bay vào rổ trên nền trời xanh.",
          prompt: "Dynamic low-angle action DJI RS 4 Mini gimbal tracking shot on a sunlit outdoor Vietnamese primary school basketball court. Energetic 9-year-old Vietnamese students in neat blue-and-white PE sports uniforms dribble, pass, and shoot a basketball toward the hoop as the camera tilts smoothly upward following the ball against a bright blue sky. Encouraging PE coach clapping on the sideline, crisp sunlit 50fps slow-motion sports documentary look, Sony ZV-E10 Sigma 18mm f/6.3, 16:9."
        },
        {
          label: "Cú máy 2: Cả đội chụm tay tung lên trời hô quyết tâm",
          motionVi: "RS 4 Mini góc thấp 18mm từ giữa vòng tròn hất nhẹ lên khi cả đội bóng rổ chụm tay và bật tung lên trời reo hò đầy năng lượng.",
          prompt: "Low-angle wide sports huddle shot tilting slightly upward as a team of smiling Vietnamese primary school basketball players in sports uniforms stack their hands in the center and cheer throwing hands up toward the bright sky. Warm afternoon sunlight flare, energetic joyful teamwork, Sony ZV-E10 Sigma 18mm f/5.6, 16:9."
        }
      ]
    },
    {
      id: 16,
      code: "KẾT",
      title: "A School, Two Campuses, One English Journey",
      vnTitle: "Phần kết: Một ngôi trường – Hai cơ sở – Một hành trình Tiếng Anh",
      duration: "25 giây",
      durationSec: 25,
      image: "./images/scene-16.jpg",
      location: "Ngoài trời — Sân trường 2 điểm trường (Cảnh đại kết)",
      environment: "outdoor",
      isHighlight: false,
      needsSlowMo: true,
      needsLight: false,
      lightStatus: "Tắt đèn (Nắng sáng hoặc chiều đẹp rực rỡ)",
      zve10Config: "Sigma 18mm rộng nhất (đội hình tập thể, f/7.1) & 28mm (lời kết các bạn học sinh, f/4) • 4K 25p & 1080p 50p • SteadyShot OFF",
      gimbalMode: "RS 4 Mini: Giữ cò Lock (Split Screen) → Đi lùi nâng cao RS 4 Mini giả lập Flycam!",
      gimbalIcon: "pull-out",
      connectionType: "Split Screen 2 điểm trường + Montage highlight 15 hoạt động",
      connectionTip: "Cảnh kết tạo cảm xúc vỡ òa: Cho Student A đứng giữa sân Điểm chính, Student B đứng giữa sân Phân hiệu — phía sau là thầy cô và học sinh xếp hình vòng cung! Quay bằng **Sigma 18mm** đi lùi đồng thời nâng cao RS 4 Mini lên trên đầu khi cả trường vẫy tay, về ghép đôi màn hình và chạy chữ kết!",
      beginnerTip: "Xếp đội hình tập thể: Các bé thấp đứng trước, thầy cô và học sinh cao đứng vòng cung phía sau để KHÔNG ai bị che mặt! Tắt SteadyShot để tận dụng hết góc **18mm** của Sigma (khép khẩu **f/7.1** để từ các bạn học sinh phía trước đến toàn thể thầy cô phía sau đều rõ nét!), đi lùi 5–6 bước và từ từ giơ cao RS 4 Mini qua đầu (nhớ bấm giữ cò Lock hoặc hơi chúi nhẹ bằng Joystick) — tạo hiệu ứng mini flycam cực hoành tráng!",
      shots: [
        {
          id: "s16-1",
          campus: "Điểm chính & Phân hiệu",
          framing: "Trung cận (Sigma 28mm • f/4–f/5.6) — Chính giữa khung",
          move: "RS 4 Mini giữ cò Lock tĩnh (để ghép Split Screen 50/50)",
          desc: "Student A và Student B đọc luân phiên lời kết đầy tự hào ('Two campuses...' — 'One big family!' — 'One happy school! One English journey!')."
        },
        {
          id: "s16-2",
          campus: "Dựng từ kho B-roll 15 cảnh trên",
          framing: "Montage nhanh (mỗi cảnh 0.8–1 giây)",
          move: "Chuyển cảnh theo nhịp nhạc dâng cao",
          desc: "Lồng ghép nhanh những nụ cười đẹp nhất từ 15 hoạt động đã quay (English Passport, English Tree, Bóng rổ, Âm nhạc, Thư viện...)."
        },
        {
          id: "s16-3",
          campus: "Cả 2 cơ sở (Đội hình tập thể)",
          framing: "Toàn cảnh rộng nhất (Sigma 18mm • f/7.1)",
          move: "RS 4 Mini đi lùi kết hợp nâng cao tay cầm lên trên đầu (Giả lập Flycam mini! • 1080p 50fps)",
          desc: "Toàn thể giáo viên và học sinh cùng hô vang câu kết và vẫy tay rạng rỡ chào ống kính → Hiện dòng chữ kết thúc."
        }
      ],
      dialogue: [
        { speaker: "Student A (Điểm chính)", text: "\"At Dai Mo Primary School, we learn with joy, confidence and creativity.\"" },
        { speaker: "Student B (Phân hiệu)", text: "\"We speak English, share ideas and make wonderful memories every day.\"" },
        { speaker: "Student A → Student B", text: "\"Two campuses...\" — \"One big family!\"" },
        { speaker: "Cả các bạn học sinh (Split Screen)", text: "\"One happy school! One English journey!\"" },
        { speaker: "Tập thể toàn trường", text: "\"We love Dai Mo Primary School! English is our second language. Let's learn and grow together!\"" },
        { speaker: "Chữ kết thúc trên màn hình", text: "DAI MO PRIMARY SCHOOL — HAPPY SCHOOL – ENGLISH EVERY DAY! — TWO CAMPUSES – ONE BIG FAMILY – ONE ENGLISH JOURNEY", isCaption: true }
      ],
      aiPrompts: [
        {
          label: "Cú máy kết: Giả lập Flycam lùi rộng & nâng cao RS 4 Mini toàn thể thầy trò vẫy chào",
          motionVi: "RS 4 Mini đặt tiêu cự rộng nhất 18mm f/7.1, đi lùi đều ra xa đồng thời từ từ nâng cao tay cầm gimbal lên qua đầu (hiệu ứng mini crane/drone) mở rộng thấy các bạn học sinh phía trước và hàng chục thầy cô, học sinh phía sau đồng loạt vẫy tay rạng rỡ.",
          prompt: "Inspiring cinematic finale DJI RS 4 Mini gimbal shot pulling backward steadily while rising smoothly upward like a mini jib crane in a sunlit Vietnamese primary school courtyard. Two beaming 9-year-old Vietnamese student hosts (a boy and a girl in white uniforms and red scarves) stand proudly in the center foreground waving happily, revealing a warm semicircle of smiling Vietnamese teachers and dozens of joyful primary students waving enthusiastically behind them. Golden uplifting morning sunlight, deep crisp focus across the crowd at f/7.1, vibrant natural colors, Sony ZV-E10 Sigma 18mm wide shot, 16:9."
        }
      ]
    }
  ]
};
