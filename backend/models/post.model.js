import mongoose from 'mongoose';

// Define the Post Schema
const postSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['job', 'result', 'admission', 'admitcard', 'syllabus', 'answerkey'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dates: {
    applicationStart: Date,
    applicationEnd: Date,
    lastDayForFees: Date,
    lastDayForUpdate: Date,
    admitCardRelease: Date,
    examDate: Date,
    resultDate: Date
  },
  applicationFees: {
    general: {
      type: Number,
      required: true
    },
    obc: {
      type: Number,
      required: true
    },
    ews: {
      type: Number,
      required: true
    },
    stsc: {
      type: Number,
      required: true
    },
    extra: {
      type: String,
      required: false
    }
  },
  ageLimits: {
    men: {
      min: {
        type: Number,
        required: true
      },
      max: {
        type: Number,
        required: true
      },
      relaxation: {
        type: String,
        required: false
      }
    },
    women: {
      min: {
        type: Number,
        required: true
      },
      max: {
        type: Number,
        required: true
      },
      relaxation: {
        type: String,
        required: false
      }
    }
  },
  postName: {
    type: String,
    required: true
  },
  subPostNames: [{
    name: {
      type: String,
      required: true
    },
    totalPosts: {
      type: Number,
      required: true
    },
    eligibilityCriteria: {
      type: [String],
      required: true
    }
  }],
  importantLinks: [{
    description: String,
    url: String
  }],
  attachments: [{
    type: String // URLs or paths to attachments
  }],
  status: {
    type: String,
    enum: ['active', 'expired', 'draft'],
    default: 'active'
  },
  tags: [{
    type: String
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  views: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  dislikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true,
  versionKey: false
});

const Post = mongoose.model('Post', postSchema);

export default Post;
