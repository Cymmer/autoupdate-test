import { useEffect, useState } from 'react';
import { TasksV4Service } from '../services';

// only show the top 10 students
const defultNumOfStudentsToShow = 10;

const useTaskLeaderboard = ({
  taskId,
  options: { numOfStudentsToShow } = {
    numOfStudentsToShow: defultNumOfStudentsToShow,
  },
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);
  const [callCount, setCallCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setLeaderboard([]);

    const getLeaderboard = async () => {
      if (isMounted) {
        const {
          data: { results },
        } = await TasksV4Service.leaderboard({ taskId });

        let studentsWithRank = [];
        let studentsWithoutRank = [];
        let exemptedStudents = [];

        results.forEach((result) => {
          if (result.rank === null) studentsWithoutRank.push(result);
          else if (result.record.exempted) exemptedStudents.push(result);
          else studentsWithRank.push(result);
        });

        studentsWithRank.sort(
          (student1, student2) => student1.rank - student2.rank
        );

        studentsWithRank = studentsWithRank.map((student, index) => ({
          ...student,
          rank: index + 1,
        }));

        const rankOflastStudentWithRank =
          studentsWithRank[studentsWithRank.length - 1]?.rank || 0;

        studentsWithoutRank = studentsWithoutRank.map((student) => ({
          ...student,
          rank: rankOflastStudentWithRank + 1,
        }));

        exemptedStudents = exemptedStudents.map((student) => ({
          ...student,
          rank: 0,
        }));

        setLeaderboard(
          [
            ...exemptedStudents,
            ...studentsWithRank,
            ...studentsWithoutRank,
          ].splice(0, numOfStudentsToShow)
        );
        setIsLoading(false);
      }
    };

    getLeaderboard();

    return () => {
      isMounted = false;
    };
  }, [callCount]);

  return {
    isLoading,
    leaderboard,
    refresh: () => setCallCount(callCount + 1),
  };
};

export default useTaskLeaderboard;
