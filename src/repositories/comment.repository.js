const BaseRepository = require("./base.repository");
let _comment;

class CommentRepository extends BaseRepository {
  constructor({ Comment }) {
    super(Comment);
    _comment = Comment;
  }
}

module.exports = CommentRepository;