new Vue({
    el: '#app',
    data: {
        // ... (существующие данные)
        newStaffName: '',
        newStaffPhotoUrl: ''
    },
    methods: {
        // ... (существующие методы)
        addNewStaff: function () {
            if (this.newStaffName !== '' && this.newStaffPhotoUrl !== '') {
                this.staffPhotos.push({ name: this.newStaffName, url: this.newStaffPhotoUrl });
                this.newStaffName = '';
                this.newStaffPhotoUrl = '';
            }
        }
    }
});




