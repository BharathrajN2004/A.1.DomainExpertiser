import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["School", "College"],
    default: "College",
    required: true,
  },
  standard: {
    type: String,
    required: false,
  },
  degree: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
  intrests: {
    type: Array,
    required: false,
  },
}, { timestamps: true });

const EmployeeSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const ClientSchema = new mongoose.Schema({
  linkedin: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  webLink: {
    type: String,
    required: true,
  },
  startYear: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  }, country: {
    type: String,
    required: true,
  }, services: {
    type: String,
    required: true,
  }, contact: {
    type: String,
    required: true,
  }, description: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const usersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    location: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["Student", "Employee", "Client", "Company"],
      default: "Student",
    },
    roleData: {
      type: mongoose.Schema.Types.Mixed, // Allow any type for now
    },
  },
  { timestamps: true }
);

// Use a pre middleware to set the appropriate schema for roleData
usersSchema.pre('validate', function (next) {
  if (this.role === "Student") {
    this.roleData = new StudentSchema();
  } else if (this.role === "Employee") {
    this.roleData = new EmployeeSchema();
  } else if (this.role === "Client") {
    this.roleData = new ClientSchema();
  } else if (this.role === "Company") {
    this.roleData = new CompanySchema();
  }
  next();

});

const User = mongoose.model('User', usersSchema);

export default User;
