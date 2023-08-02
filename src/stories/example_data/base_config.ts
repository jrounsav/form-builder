import {
  Answer,
  EntityType,
  Page,
  Question,
  QuestionType,
  Group,
  Form,
} from "../../types"

export const answer1: Answer = {
  id: "answer1",
  text: "This is some example text for an answer to a question. For Radios or Multi.",
  maxLength: 250,
  entityType: EntityType.Answer,
}

export const answer2: Answer = {
  id: "radioAnswer2",
  text: "Another answer, for radios or multi-select",
  maxLength: 250,
  entityType: EntityType.Answer,
}

export const answer3: Answer = {
  id: "answer3",
  text: "Yet ANOTHER one",
  maxLength: 250,
  entityType: EntityType.Answer,
}

export const radioQuestion1: Question = {
  id: "radioQuestionId1",
  questionType: QuestionType.Single,
  text: "What would you do if you won the lottery?",
  children: [answer1, answer2, answer3],
  entityType: EntityType.Question,
}

export const radioQuestion2: Question = {
  id: "radioQuestionId2",
  questionType: QuestionType.Single,
  text: "Another question with similar answers?",
  children: [answer1, answer2, answer3],
  entityType: EntityType.Question,
}

export const multiQuestion1: Question = {
  id: "multiQuestionId1",
  questionType: QuestionType.Multi,
  text: "Select many from this question",
  children: [answer1, answer2, answer3],
  entityType: EntityType.Question,
}

export const multiQuestion2: Question = {
  id: "multiQuestionId2",
  questionType: QuestionType.Multi,
  text: "Many can be selected here",
  children: [answer1, answer2, answer3],
  entityType: EntityType.Question,
}

export const textQuestion1: Question = {
  id: "textQuestionId1",
  questionType: QuestionType.Text,
  text: "Write something here. Perhaps include other configs.",
  children: [], // Multiple children could be a problem
  entityType: EntityType.Question,
}

export const group1: Group = {
  id: "testGroupId1",
  title: "Group title",
  children: [radioQuestion1, radioQuestion2],
  entityType: EntityType.Group,
}

export const group2: Group = {
  id: "testGroupId2",
  title: "Other group",
  children: [multiQuestion1, multiQuestion2, textQuestion1],
  entityType: EntityType.Group,
}

export const page1: Page = {
  id: "testPageId1",
  title: "Page Title",
  children: [group1, group2],
  entityType: EntityType.Page,
}

export const page2: Page = {
  id: "testPageId2",
  title: "Page Title",
  children: [group2],
  entityType: EntityType.Page,
}

export const form1: Form = {
  id: "testFormId1",
  title: "Form Title",
  children: [page1, page2],
  entityType: EntityType.Form,
}

export const form2: Form = {
  id: "testFormId2",
  title: "TotallyNew Form",
  children: [page2, page1, page1, page1, page1],
  entityType: EntityType.Form,
}
