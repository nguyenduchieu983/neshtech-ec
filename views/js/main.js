function editItem(staffId) {
  $.ajax({
    type: "GET",
    url: `/staff/detail/${staffId}`,
    success: function (rs) {
      if (rs.s === 200) {
        let staffInfo = rs.data;
        var formEdit = `
                  <h3>Cập nhật thông tin nhân viên</h3>
                  <form class="row g-3" action="/staff/edit" method="post">
                      <div class="col-md-6">
                      <label for="name" class="form-label">Name</label>
                      <input type="text" class="form-control" id="name" name="name" placeholder="Nhập tên" value="${staffInfo.name}">
                      </div>
                      <div class="col-md-6">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" name="email" placeholder="Nhập email" value="${staffInfo.email}">
                      </div>
                      <div class="col-6">
                      <label for="age" class="form-label">Age</label>
                      <input type="text" class="form-control" id="age" name="age" placeholder="Nhập tuổi" value="${staffInfo.age}">
                      </div>
                      <div class="col-12">
                      <button type="submit" class="btn btn-primary">Cập nhật</button>
                      </div>
                  </form>
                  `;
        $("#formEdit").html(formEdit);
      } else {
        alert(rs.msg);
      }
    },
  });
}
