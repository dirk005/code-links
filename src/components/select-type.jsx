import React from "react";

const SelectType = ({ selectType }) => {
  return (
    <div className="selectType">
      <button
        className="selectType_item"
        name="All"
        onClick={() => selectType("All")}
      >
        All
      </button>
      <button
        className="selectType_item"
        name="Python"
        onClick={() => selectType("Python")}
      >
        Python
      </button>
      <button
        className="selectType_item"
        name="Nodejs"
        onClick={() => selectType("Nodejs")}
      >
        Nodejs
      </button>
      <button
        className="selectType_item"
        name="javascript"
        onClick={() => selectType("javascript")}
      >
        Java Script
      </button>
      <button
        className="selectType_item"
        name="HTML"
        onClick={() => selectType("HTML")}
      >
        HTML
      </button>
      <button
        className="selectType_item"
        name="CSS"
        onClick={() => selectType("CSS")}
      >
        CSS
      </button>
      <button
        className="selectType_item"
        name="Database"
        onClick={() => selectType("database")}
      >
        Database
      </button>
      <button
        className="selectType_item"
        name="ml"
        onClick={() => selectType("ml")}
      >
        Machine Learning
      </button>
      <button
        className="selectType_item"
        name="mongodb"
        onClick={() => selectType("mongodb")}
      >
        Mongodb
      </button>
      <button
        className="selectType_item"
        name="API"
        onClick={() => selectType("API")}
      >
        API
      </button>
      <button
        className="selectType_item"
        name="HTTP"
        onClick={() => selectType("HTTP")}
      >
        HTTP
      </button>
      <button
        className="selectType_item"
        name="React"
        onClick={() => selectType("React")}
      >
        React
      </button>
      <button
        className="selectType_item"
        name="git"
        onClick={() => selectType("git")}
      >
        GITHub
      </button>
      <button
        className="selectType_item"
        name="sql"
        onClick={() => selectType("sql")}
      >
        SQL
      </button>
      <button
        className="selectType_item"
        name="Redux"
        onClick={() => selectType("Redux")}
      >
        Redux
      </button>
      <button
        className="selectType_item"
        name="Hacking"
        onClick={() => selectType("Hacking")}
      >
        Hacking
      </button>
      <button
        className="selectType_item"
        name="styleguide"
        onClick={() => selectType("styleguide")}
      >
        Style Guide
      </button>
    </div>
  );
};

export default SelectType;
