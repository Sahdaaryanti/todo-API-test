'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos', [
      {
        title: 'Membuat API dengan JavaScript',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Hapus semua data yang dimasukkan pada up method
    await queryInterface.bulkDelete('Todos', null, {});
  },
};
