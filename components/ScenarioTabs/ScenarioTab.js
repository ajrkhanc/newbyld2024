import styles from "../../styles/coachKnowledge.module.css";

const ScenarioTabs = ({ scenarios, activeTab, setActiveTab }) => {
  return (
    <div className={styles.left}>
      {scenarios.map((s) => (
        <div key={s.id} className={styles.tabWrapper}>
          {/* Apply active class to both divs */}
          <div
            className={`${styles.fancyTopBorder} ${
              activeTab === s.id ? styles.active : ""
            }`}
          >
            <div
              className={`${styles.fancy} ${
                activeTab === s.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(s.id)}
            >
              <span className={styles.topKey}></span>
              <span className={styles.text}>
                <span className={styles.serialNumberText}>{s.id}.</span>
                Scenario &ldquo;{s.title}&rdquo;
              </span>
              <span className={styles.bottomKey1}></span>
              <span className={styles.bottomKey2}></span>
            </div>
            <span className={styles.topKey1}></span>

            <span className={styles.bottomKey3}></span>
            <span className={styles.bottomKey4}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScenarioTabs;
