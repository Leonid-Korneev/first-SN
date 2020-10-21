

export const getCurrentPage = (state)=> state.usersSearch.currentPage
export const getUsersSearch = (state)=> state.usersSearch
export const getTotalUsersCount = (state)=> state.usersSearch.totalUsersCount
export const getPageSize = (state)=> state.usersSearch.pageSize
export const checkFetching  = (state)=> state.usersSearch.isFetching
export const getIsFollowingInProgress = (state)=> state.usersSearch.isFollowingInProgress