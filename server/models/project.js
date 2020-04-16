module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true      
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    submission_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coaching_skills_needed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsor_relation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitter_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkdin_url: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  return Project;
};
