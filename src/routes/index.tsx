
      {/* Nội thất xe */}
      <Section
        muted
        eyebrow="Nội thất"
        title="Hình ảnh nội thất xe"
        intro="Khám phá không gian bên trong các dòng xe phục vụ của Phương Đông SQ."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: "/noithatlimou.jpg",
              title: "Nội thất xe Limousine",
              desc: "Không gian tiện nghi, phù hợp cho những chuyến đi thoải mái.",
            },
            {
              src: "/noithatgiuongnam.jpg",
              title: "Nội thất xe giường nằm",
              desc: "Không gian nghỉ ngơi cho hành trình đường dài.",
            },
            {
              src: "/noithat45.jpg",
              title: "Nội thất xe 45 chỗ",
              desc: "Phù hợp cho đoàn khách du lịch và tập thể.",
            },
            {
              src: "/noithat34.jpg",
              title: "Nội thất xe 34 chỗ",
              desc: "Lựa chọn dành cho đoàn khách quy mô vừa.",
            },
            {
              src: "/noithat16.jpg",
              title: "Nội thất xe 16 chỗ",
              desc: "Gọn gàng, phù hợp cho gia đình và nhóm nhỏ.",
            },
          ].map((photo) => (
            <article
              key={photo.src}
              className="overflow-hidden rounded-2xl border bg-card shadow-card"
            >
              <img
                src={photo.src}
                alt={photo.title}
                width={800}
                height={600}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-300 hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary-deep">
                  {photo.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {photo.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>
