const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const VideoMetadata = sequelize.define('VideoMetadata', {
  slug: { type: DataTypes.STRING, allowNull: false, unique: true },
  filePath: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  uploaderId: { type: DataTypes.STRING, allowNull: true },
  createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
});

module.exports = VideoMetadata;