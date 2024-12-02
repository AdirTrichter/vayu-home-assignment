export class UserGroupNotFound extends Error {
  constructor(groupId, userId: number) {
    super(
      `no match was found between group id: ${groupId} and user id: ${userId}`,
    );
  }
}
