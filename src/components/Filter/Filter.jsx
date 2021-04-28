import PropTypes from "prop-types";
import { filterWrapper, filterLabel } from "./Filter.module.css";

const Filter = (props) => {
  const { onInput } = props;
  return (
    <div className={filterWrapper}>
      <label className={filterLabel} htmlFor="filter">
        Find contacts by name or number
      </label>
      <input id="filter" onInput={onInput} type="text"></input>
    </div>
  );
};

Filter.propTypes = {
  onInput: PropTypes.func.isRequired,
};

export default Filter;
