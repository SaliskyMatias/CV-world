const { Cv, User, Comment } = require("../../db");

const postCvController = async (name, image, description, experience, contact, study, applying, userId) => {
    try {
        const [newCv, created] = await Cv.findOrCreate({
            where: {
                name,
                image,
                description,
                experience,
                contact,
                study,
                applying,
                UserId: userId,
            },
        });

        return newCv;
    } catch (error) {
        console.error("Error creating CV:", error);
        throw error;
    }
};

module.exports = postCvController;
