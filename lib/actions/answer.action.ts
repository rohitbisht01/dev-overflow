"use server";

import Answer from "@/database/answer.model";
import { connectToDatabase } from "../mongoose";
import { CreateAnswerParams, GetAnswersParams } from "./shared.types";
import Question from "@/database/question.model";
import { revalidatePath } from "next/cache";

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDatabase();

    const { content, question, author, path } = params;
    const newAnswer = await Answer.create({
      content,
      author,
      question,
    });

    // Add the answer to questionos answer array
    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });

    // todo => add  interaction

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAnswers(params: GetAnswersParams) {
  try {
    connectToDatabase();

    const { questionId } = params;
    const answers = await Answer.find({ question: questionId })
      .populate("author", "_id clerk name picture")
      .sort({ createAt: -1 });

    return { answers };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
